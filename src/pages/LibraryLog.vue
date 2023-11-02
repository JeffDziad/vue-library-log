<script setup>
import Menu from "components/Menu.vue";
import ResultArea from "components/ResultArea.vue";
import {inject, onMounted, ref} from "vue";
import Book from "src/models/Book";
import LibraryCollection from "../models/LibraryCollection";

//* Variables
const libraryCollection = ref(new LibraryCollection());
const ALL_CATEGORIES = ref([]);

//* Hooks
onMounted(() => {
  Object.assign(libraryCollection.value, getFromLocalStorage('libraryCollection', new LibraryCollection()));
  ALL_CATEGORIES.value = getFromLocalStorage('categories', ["Horror", "Fiction"]);
});

//* Functions
const showNotif = inject('showNotif');

function getFromLocalStorage(key, defaultValue={}) {
  let value = localStorage.getItem(key);
  if(value) return JSON.parse(value);
  else {
    setToLocalStorage(key, defaultValue);
    return defaultValue;
  }
}

function setToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function saveAndUpdateUniqueCategories(categories) {
  for(const cat in categories) {
    let exists = ALL_CATEGORIES.value.indexOf(categories[cat]);
    if(exists === -1) {
      ALL_CATEGORIES.value.push(categories[cat]);
    }
  }
  setToLocalStorage("categories", ALL_CATEGORIES.value);
}

function saveBook(book) {
  try {
    // Save unique categories to variable and localstorage.
    saveAndUpdateUniqueCategories(book.categories);
    // Save book to variable and localstorage.
    libraryCollection.value.addItem(book);
    setToLocalStorage("libraryCollection", libraryCollection.value);
    showNotif('green', 'white', "Added Book!", "library_add");
  } catch (e) {
    console.error(e);
    showNotif('red', 'white', "Failed to Add Book!", "error");
  }
}


//! ---------------------------------------------------------------------------
//! Look at notes for possible solution.
//!   This all could be put in LibraryCollection as two functions, saveItem and deleteItem.
//!   Which receives an item object and uses media's type to determine which array to delete from.
function saveItem(item) {
  //? Receiving Book, Movie
  let type = item.type;

  switch (type) {
    case "Book": {
      saveBook(item);
      break;
    }
    default: {
      showNotif("red", "white", "Item type not found: " + type, "error");
    }
  }
}

function deleteItem(item) {
  try {
    libraryCollection.value.removeItem(item);
    setToLocalStorage('libraryCollection', libraryCollection.value);
    showNotif('green', 'white', 'Deleted ' + item.media.type + "!", 'delete');
  } catch (e) {
    console.log(e);
    showNotif('red', 'white', "Failed to Delete Book!", 'error');
  }
}
//! ---------------------------------------------------------------------------
</script>

<template>


  <div>
    <div class="q-mt-md">
      <Menu :all-categories="ALL_CATEGORIES" :save-item="saveItem"></Menu>
    </div>
    <div class="q-mt-md">
      <ResultArea :items="libraryCollection.items" :delete-item="deleteItem"></ResultArea>
    </div>
  </div>


</template>

<style scoped>

</style>

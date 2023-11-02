<script setup>
import Menu from "components/Menu.vue";
import ResultArea from "components/ResultArea.vue";
import {inject, onMounted, ref} from "vue";
import Book from "src/models/Book";
import LibraryCollection from "../models/LibraryCollection";

//* Variables
const libraryCollection = ref(new LibraryCollection());

// const ALL_BOOKS = ref([]);
const ALL_CATEGORIES = ref([]);

//* Hooks
onMounted(() => {
  // ALL_BOOKS.value = createBooks(getFromLocalStorage('books'));
  Object.assign(libraryCollection.value, getFromLocalStorage('libraryCollection', new LibraryCollection()));
  ALL_CATEGORIES.value = getFromLocalStorage('categories', ["Horror", "Fiction"]);
  console.log(ALL_CATEGORIES.value);
});

//* Computed

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

// function createBooks(objs) {
//   for(let i = 0; i < objs.length; i++) {
//     objs[i] = Object.assign(new Book(), objs[i]);
//   }
//   return objs;
// }

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
    showNotif('green', 'white', "Added Book!", "check_circle");
  } catch(e) {
    console.error(e);
    showNotif('red', 'white', "Failed to Add Book!", "error");
  }
}

function deleteBook(book) {
  try {
    libraryCollection.value.removeItem(book);
    setToLocalStorage('libraryCollection', libraryCollection.value);
    showNotif('green', 'white', 'Deleted ' + book.title + "!", 'check_circle');
  } catch (e) {
    console.log(e);
    showNotif('red', 'white', "Failed to Delete Book!", 'error');
  }
}


//! ---------------------------------------------------------------------------
//! Look at notes for possible solution.
function saveItem(item) {
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
  console.log(item);

  let type = item.type;

  switch (type) {
    case "Book": {
      deleteBook(item);
      break;
    }
    default: {
      showNotif("red", "white", "Item type not found: " + type, "error");
    }
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

<script setup>
import Menu from "components/Menu.vue";
import ResultArea from "components/ResultArea.vue";
import {onMounted, ref} from "vue";
import Book from "src/models/Book";

//* Variables
const ALL_BOOKS = ref([]);
const ALL_CATEGORIES = ref([]);

//* Hooks
onMounted(() => {
  ALL_BOOKS.value = createBooks(getFromLocalStorage('books'));
  ALL_CATEGORIES.value = getFromLocalStorage('categories', ["Horror", "Fiction"]);
});

//* Computed

//* Functions
function getFromLocalStorage(key, defaultValue=[]) {
  let value = localStorage.getItem(key);
  if(value) return JSON.parse(value);
  else {
    setToLocalStorage(key, defaultValue);
    return defaultValue;
  };
}

function createBooks(objs) {
  for(let i = 0; i < objs.length; i++) {
    objs[i] = Object.assign(new Book(), objs[i]);
  }
  return objs;
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
  // Save unique categories to variable and localstorage.
  saveAndUpdateUniqueCategories(book.categories);
  // Save book to variable and localstorage.
  ALL_BOOKS.value.push(book);
  setToLocalStorage("books", ALL_BOOKS.value);
  console.log(ALL_BOOKS, ALL_CATEGORIES);
}

function deleteBook(book) {

}

</script>

<template>


  <div>
    <div class="q-mt-md">
      <Menu :all-categories="ALL_CATEGORIES" :save-book-func="saveBook"></Menu>
    </div>
    <div class="q-mt-md">
      <ResultArea :items="ALL_BOOKS"></ResultArea>
    </div>
  </div>


</template>

<style scoped>

</style>

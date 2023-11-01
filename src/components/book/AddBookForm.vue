<script setup>
import BasicTabsWithContent from "components/basics/BasicTabsWithContent.vue";
import BookForm from "components/book/form/BookForm.vue";
import GoogleBookForm from "components/book/form/GoogleBookForm.vue";
import {ref} from "vue";
import Book from "src/models/Book";

const props = defineProps({
  allCategories: {
    type: Array,
  },
  saveItem: {
    type: Function,
  }
});

let book = ref(new Book());

function saveBook() {
  props.saveItem(book.value);
}

function reset() {
  book.value = new Book();
}

defineExpose({
  reset,
});
</script>

<template>
  <BasicTabsWithContent :tab-names="['Manual', 'Search']">
    <template #Manual-tab>
      <span><q-icon name="edit_note" size="md"/>Manual</span>
    </template>
    <template #Search-tab>
      <span><q-icon name="manage_search" size="md"/>Search</span>
    </template>

    <template #Manual-content>
      <BookForm :book="book" :all-categories="allCategories" @valid-submit="saveBook"/>
    </template>
    <template #Search-content>
      <GoogleBookForm/>
    </template>
  </BasicTabsWithContent>
</template>

<style scoped>

</style>

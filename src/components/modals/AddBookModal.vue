<script setup>
import BasicModal from "components/basics/BasicModal.vue";
import BasicTabsWithContent from "components/basics/BasicTabsWithContent.vue";
import {ref} from "vue";
import Book from "src/models/Book";
import BookForm from "components/forms/BookForm.vue";
import GoogleBookForm from "components/forms/GoogleBookForm.vue";

const props = defineProps({
  allCategories: {
    type: Array,
    default: [],
  },
  saveBookFunc: {
    type: Function,
    required: true,
  }
});

let modal = ref(null);
let book = ref(new Book());

function showModal() {
  modal.value.show();
}

function hideModal() {
  modal.value.hide();
}

function onModalClose() {
  book.value = new Book();
}

function saveBook() {
  hideModal();
  props.saveBookFunc(book.value);
}
</script>

<template>
  <q-btn @click="showModal" class="bg-white text-primary border-primary" icon="add" size="md" rounded>
    Add Book
  </q-btn>

  <BasicModal ref="modal" :on-hide="onModalClose">
    <template #header>
      <div class="text-h6">
        <q-icon name="add"></q-icon>
        Add Book
      </div>
    </template>

    <template #content>
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
  </BasicModal>
</template>

<style scoped>

</style>

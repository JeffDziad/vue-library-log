<script setup>
import BookForm from "components/book/form/BookForm.vue";
import BasicModal from "components/basics/BasicModal.vue";
import {ref} from "vue";

const props = defineProps({
  book: {
    type: Object,
    required: true,
  },
  allCategories: {
    type: Array,
    default: [],
  }
});

const modal = ref(null);

function showModal() {
  modal.value.show();
}

function submit() {
  // props.book is ready to be saved.
}
</script>

<template>
  <slot name="button" :showModal="showModal">
    <q-btn @click="showModal" class="xs-hide" padding="70% md" size="xl" flat color="dark" icon="edit"></q-btn>
  </slot>

  <BasicModal ref="modal">
    <template #header>
      Edit Book
    </template>
    <template #content>
      <BookForm :book="book" :all-categories="allCategories" @valid-submit="submit"></BookForm>
    </template>
  </BasicModal>
</template>

<style scoped>

</style>

<script setup>
import BasicModal from "components/basics/BasicModal.vue";
import {ref} from "vue";

const props = defineProps({
  allCategories: {
    type: Array,
    default: [],
  },
  saveItem: {
    type: Function,
    required: true,
  }
});

let modal = ref(null);
let addBookForm = ref(null);

function showModal() {
  modal.value.show();
}

function hideModal() {
  modal.value.hide();
}

function onModalClose() {
  addBookForm.reset();
}

function save(item) {
  props.saveItem(item);
  hideModal();
}
</script>

<template>
  <q-btn @click="showModal" class="bg-white text-primary border-primary" icon="add" size="lg" round></q-btn>

  <BasicModal ref="modal" :on-hide="onModalClose">
    <template #header>
      <div class="text-h6">
        <q-icon name="add"></q-icon>
        Add Book
      </div>
    </template>

    <template #content>
<!--  ADD TABS HERE FOR DIFFERENT TYPES OF LIBRARY ITEMS AddForms  -->
<!--  AddBookForm should go in a book tab, the tab should probably just be a book icon -->

      <AddBookForm ref="addBookForm" :save-item="save"></AddBookForm>
    </template>
  </BasicModal>
</template>

<style scoped>

</style>

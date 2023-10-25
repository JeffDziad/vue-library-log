<script setup>
import SearchOptionMenu from "components/SearchOptionMenu.vue";
import SearchInput from "components/SearchInput.vue";
import AddBookModal from "components/modals/AddBookModal.vue";

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
</script>

<template>
  <div class="q-pa-md rounded-borders faded-wight-background">
    <div class="row">

      <div class="col-12 q-mb-sm">
        <div class="row">
          <div class="col">
            <SearchInput></SearchInput>
          </div>
          <div class="col flex justify-end">
            <!-- Add Button Here -->
            <AddBookModal :all-categories="allCategories" :save-book-func="saveBookFunc"></AddBookModal>
          </div>
        </div>
      </div>

      <div class="col-12">
        <SearchOptionMenu></SearchOptionMenu>
      </div>

    </div>
  </div>

</template>

<style scoped>

</style>

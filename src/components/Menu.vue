<script setup>
import SearchOptionMenu from "components/SearchOptionMenu.vue";
import SearchInput from "components/SearchInput.vue";
import AddItemModal from "components/modal/add_item/AddItemModal.vue";

const props = defineProps({
  allCategories: {
    type: Array,
    default: [],
  },
  saveItem: {
    type: Function,
    required: true,
  },
  search: {
    type: Function,
  }
});

</script>

<template>
  <div class="q-pa-md rounded-borders faded-wight-background">
    <div class="row">

      <div class="col-12 q-mb-sm">
        <div class="row">
          <div class="col">
            <SearchInput :search-func="search"></SearchInput>
          </div>
          <div class="col flex justify-end">
            <!-- Add Button Here -->
            <AddItemModal :all-categories="allCategories" :save-item="saveItem"></AddItemModal>
          </div>
        </div>
      </div>

      <div class="col-12">
        <SearchOptionMenu :all-categories="allCategories"></SearchOptionMenu>
      </div>

    </div>
  </div>

</template>

<style scoped>

</style>

<script setup>
import SearchOptionMenu from "components/SearchOptionMenu.vue";
import SearchInput from "components/SearchInput.vue";
import AddItemModal from "components/modal/add_item/AddItemModal.vue";
import {ref} from "vue";

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

const searchCategories = ref([]);
const searchProperties = ref([]);

</script>

<template>
  <div class="q-pa-md rounded-borders faded-wight-background">
    <div class="row">

      <div class="col-12 q-mb-sm">
        <div class="row">
          <div class="col">
            <SearchInput :search-func="search"></SearchInput>
          </div>
          <div class="col-xs-auto col-sm-6 flex justify-end q-ml-sm">
            <!-- Add Button Here -->
            <AddItemModal :all-categories="allCategories" :save-item="saveItem"></AddItemModal>
          </div>
        </div>
      </div>

      <div class="col-12">
        <SearchOptionMenu :all-categories="allCategories" :search-categories="searchCategories" :search-properties="searchProperties"></SearchOptionMenu>
      </div>

    </div>
  </div>

</template>

<style scoped>

</style>

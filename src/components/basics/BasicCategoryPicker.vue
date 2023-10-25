<script setup>
import BasicListMaker from "components/basics/BasicListMaker.vue";
import {computed, inject, onMounted, ref} from "vue";
import BasicToggleQItem from "components/basics/BasicToggleQItem.vue";

const removeDuplicatesFromArray = inject('removeDuplicatesFromArray');

const props = defineProps({
  allCategories: {
    type: Array,
    default: [],
  },
  selectedCategories: {
    type: Array,
    default: [],
  }
});

const reduced = computed(() => {
  return removeDuplicatesFromArray(props.allCategories.concat(props.selectedCategories));
});

function addCategory(cat) {
  props.selectedCategories.push(cat);
}

</script>

<template>
<BasicListMaker title="Categories" icon="category" :list="reduced" item-label="Category" @new-item="addCategory">
  <template #item="{ item }">
    <BasicToggleQItem :name="item" :selected="selectedCategories"></BasicToggleQItem>
  </template>
</BasicListMaker>
</template>

<style scoped>

</style>

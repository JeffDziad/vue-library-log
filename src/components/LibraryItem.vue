<script setup>
import {computed} from "vue";
import BookCard from "components/book/BookCard.vue";

const Comps = {
  "BookCard": BookCard,
};

const props = defineProps({
  item: {
    type: Object,
  },
  allCategories: {
    type: Array,
    default: [],
  },
  deleteItem: {
    type: Function,
    required: true,
  },
  viewFormat: {
    type: String,
    required: true,
  }
});

const cardType = computed(() => {
  return props.item.media.type + "Card";
});

</script>

<template>
  <component :is="Comps[cardType]" :item="item.media" :all-categories="allCategories" :view-format="viewFormat" @delete="deleteItem(item)"/>
</template>

<style scoped>

</style>

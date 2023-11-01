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
<!--  <BookCard :item="item.media"></BookCard>-->
<!--  {{cardType}}-->

  <component :is="Comps[cardType]" :item="item.media" :view-format="viewFormat"/>
</template>

<style scoped>

</style>

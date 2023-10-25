<script setup>
import BookCard from "components/BookCard.vue";

const props = defineProps({
  items: {
    type: Array,
  }
});
</script>

<template>
<div class="q-pa-md faded-wight-background rounded-borders">
  <div class="row q-mb-md">
    <div class="col-6 flex justify-start">
      <span class="bg-primary text-white q-pa-sm text-subtitle1 rounded-borders">{{items.length}} Result(s)</span>
    </div>
    <div class="col-6 flex justify-end">
      <q-btn-group push>
        <q-btn color="primary" push label="List" icon="list" />
        <q-btn color="primary" push label="Grid" icon="grid_view" />
      </q-btn-group>
    </div>
  </div>
  <div class="row">
    <div class="col-12" v-for="b in items">
      <BookCard :book="b"/>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>

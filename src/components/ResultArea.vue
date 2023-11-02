<script setup>
import {ref} from "vue";
import LibraryItem from "components/LibraryItem.vue";

const props = defineProps({
  items: {
    type: Array,
  },
  deleteItem: {
    type: Function,
    required: true,
  }
});

const viewFormat = ref("list");
</script>

<template>
<div class="q-pa-md faded-wight-background rounded-borders">
  <div class="row q-mb-md">
    <div class="col-6 flex justify-start">
      <span class="bg-primary text-white q-pa-sm text-subtitle1 rounded-borders">{{items.length}} Result(s)</span>
    </div>
    <div class="col-6 flex justify-end">
      <q-btn-group push>
        <q-btn :disable="viewFormat==='list'" @click="viewFormat = 'list'" color="primary" push label="List" icon="list" />
        <q-btn :disable="viewFormat==='grid'" @click="viewFormat = 'grid'" color="primary" push label="Grid" icon="grid_view" />
      </q-btn-group>
    </div>
  </div>
  <div class="row" :class="{'flex': viewFormat==='grid', 'justify-around': viewFormat==='grid'}">
    <div :class="{'col-12': viewFormat==='list'}" v-for="(i) in items">
      <LibraryItem :item="i" :view-format="viewFormat" :delete-item="deleteItem"></LibraryItem>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>

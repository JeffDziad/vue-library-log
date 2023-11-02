<script setup>
import BasicFullScreenModal from "components/basics/BasicFullScreenModal.vue";
import {ref} from "vue";

const props = defineProps({
  book: {
    type: Object,
  }
});

const modal = ref(null);

function openModal() {
  modal.value.show();
}
</script>

<template>
<slot name="button" :openModal="openModal">
  <q-btn @click="openModal">Open</q-btn>
</slot>

<BasicFullScreenModal ref="modal">
  <template #header>
    <span class="text-subtitle1">{{book.title}}</span>
  </template>
  <template #content>
    <div class="container">

    </div>
  </template>
</BasicFullScreenModal>
</template>

<style scoped>

</style>

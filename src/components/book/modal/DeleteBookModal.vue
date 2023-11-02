<script setup>
import BasicModal from "components/basics/BasicModal.vue";
import {ref} from "vue";

const emit = defineEmits(['confirmed']);

const props = defineProps({
  title:  {
    type: String,
    required: true,
  }
});

const modal = ref(null);

function showModal() {
  modal.value.show();
}

</script>

<template>
  <slot name="button" :showModal="showModal">
    <q-btn @click="showModal" padding="70% md" size="xl" flat color="negative" icon="delete"></q-btn>
  </slot>

  <BasicModal ref="modal">
    <template #header>
      <div class="text-h6">
        <q-icon name="delete"/>
        Delete Book
      </div>
    </template>
    <template #content>
      <p class="text-subtitle1">Are you sure you would like to delete <span class="text-bold text-italic">"{{title}}"</span> from your library?</p>
    </template>
    <template #actions>
      <q-card-actions>
        <q-btn outline flat color="positive" v-close-popup>Cancel</q-btn>
        <q-space/>
        <q-btn outline flat color="negative" @click="emit('confirmed')">Delete</q-btn>
      </q-card-actions>
    </template>
  </BasicModal>
</template>

<style scoped>

</style>

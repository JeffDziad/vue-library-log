<script setup>
import BasicModal from "components/basics/BasicModal.vue";
import {ref} from "vue";
import BasicDeleteButton from "components/basics/buttons/BasicDeleteButton.vue";

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

defineExpose({
  showModal,
});

</script>

<template>
  <slot name="button" :showModal="showModal">
    <BasicDeleteButton :show-modal="showModal"/>
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
        <q-btn outline flat color="negative" @click="emit('confirmed')" v-close-popup>Delete</q-btn>
      </q-card-actions>
    </template>
  </BasicModal>
</template>

<style scoped>

</style>

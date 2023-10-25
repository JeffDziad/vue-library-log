<script setup>
import {ref} from "vue";

const props = defineProps({
  allCategories: {
    type: Array,
    default: [],
  }
});

const expanded = ref(false);

</script>

<template>
  <q-expansion-item
    v-model="expanded"
    icon="tune"
    label="Search Options"
    class="bg-primary"
    dark>
    <template #header>
      <span class="q-pr-md">
        <q-icon size="lg" name="tune"></q-icon>
      </span>
      <span class="text-h6">

        Search Options
      </span>
      <q-space></q-space>
    </template>
    <q-card>
      <q-card-section>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
        commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
        eveniet doloribus ullam aliquid.

        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
        commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
        eveniet doloribus ullam aliquid.
      </q-card-section>
    </q-card>
  </q-expansion-item>
</template>

<style scoped>

</style>

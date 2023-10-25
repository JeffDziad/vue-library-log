<script setup>
import {inject, ref} from "vue";

const queryString = ref('');
const loading = ref(false);
const eid = inject('eid');

function search() {
  loading.value = true;
}

</script>

<template>
  <form>
    <q-input filled bg-color="white" v-model="queryString" label="Search">
      <template #append>
        <q-btn @click="search" type="submit" :loading="loading" flat round color="primary" icon="search">
          <template #loading>
            <q-spinner-facebook/>
          </template>
        </q-btn>
      </template>
    </q-input>
  </form>
</template>

<style scoped>

</style>

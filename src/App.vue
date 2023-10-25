<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar class="text-white bg-dark">
        <q-toolbar-title class="text-center text-h3 q-py-lg">
          <q-icon name="auto_stories"></q-icon>
          Library Log
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container class="flex justify-center">
      <div id="backgroundFilter"></div>
      <q-page class="container">
        <router-view/>
      </q-page>
    </q-page-container>

  </q-layout>
</template>

<script>
import { provide } from 'vue';

function eid() {
  eid.count = eid.count ?? 1;
  return eid.count++;
}

function removeDuplicatesFromArray(arr) {
  return [...new Set(arr)];
}

export default {
  setup() {
    provide('eid', eid);
    provide('removeDuplicatesFromArray', removeDuplicatesFromArray);
  }
}
</script>

<style scoped>
#backgroundFilter {
  background: transparent;
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(5px);
}
</style>

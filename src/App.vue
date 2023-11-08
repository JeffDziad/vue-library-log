<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar class="text-white bg-dark q-py-sm">
        <q-toolbar-title class="text-h4">
<!--          <q-icon style="vertical-align: sub;" name="list"></q-icon>-->
<!--          <span style="vertical-align: baseline; font-variant: small-caps;">Library Log</span>-->
          <TypingText text="Library Log"/>
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
import {Notify} from "quasar";
import TypingText from "components/basics/text/TypingText.vue";

function eid() {
  eid.count = eid.count ?? 1;
  return eid.count++;
}

function removeDuplicatesFromArray(arr) {
  return [...new Set(arr)];
}

function dupe(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function showNotif(color, textColor, message, icon=null, multiLine=false) {
  // const random = Math.random() * 100
  // const twoActions = random > 70
  // const buttonColor = color ? 'white' : void 0

  Notify.create({
    color,
    textColor,
    icon: icon,
    message,
    position: 'bottom-right',
    // avatar,
    multiLine,
    // actions: twoActions
    //   ? [
    //     { label: 'Reply', color: buttonColor, handler: () => { /* console.log('wooow') */ } },
    //     { label: 'Dismiss', color: 'yellow', handler: () => { /* console.log('wooow') */ } }
    //   ]
    //   : (random > 40
    //       ? [{ label: 'Reply', color: buttonColor, handler: () => { /* console.log('wooow') */ } }]
    //       : null
    //   ),
    timeout: Math.random() * 5000 + 3000
  })
}

function randInRange(min, max) {
  return Math.random() * (max - min) + min;
}

export default {
  components: {TypingText},
  setup() {
    provide('eid', eid);
    provide('removeDuplicatesFromArray', removeDuplicatesFromArray);
    provide('showNotif', showNotif);
    provide('randInRange', randInRange);
    provide('dupe', dupe);
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

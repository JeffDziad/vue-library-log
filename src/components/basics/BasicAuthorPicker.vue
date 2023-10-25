<script setup>
import BasicListMaker from "components/basics/BasicListMaker.vue";

const props = defineProps({
  authors: {
    type: Array,
  },
});

function addAuthor(auth) {
  props.authors.push(auth);
}

function removeAuthor(auth) {
  props.authors.splice(props.authors.indexOf(auth), 1);
}
</script>

<template>
  <BasicListMaker title="Authors" icon="group" item-label="Author" :list="authors" @new-item="addAuthor">
    <template #item="{item}">
      <q-item>
        <q-item-section>
          <div class="flex justify-between">
            <span class="text-subtitle1">{{item}}</span>
            <q-btn unelevated round color="negative" icon="remove" dense @click="removeAuthor(item)"></q-btn>
          </div>
        </q-item-section>
      </q-item>
    </template>
  </BasicListMaker>
</template>

<style scoped>

</style>

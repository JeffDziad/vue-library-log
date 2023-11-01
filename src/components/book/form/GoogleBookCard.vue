<script setup>
import {computed} from "vue";

const props = defineProps({
  book: {
    type: Object,
  }
});

const thumbnail = computed(() => {
  let i = props.book.volumeInfo.imageLinks.smallThumbnail;
  if(i) return i;
  else return "https://www.prachiindia.com/ModuleFiles/Items/Cover_image.png";
});
</script>

<template>
  <q-card class="q-mb-md">
    <q-card-section>
      <q-img class="thumbnail" :src="thumbnail"></q-img>
      <q-card-section>
        <p>{{book.volumeInfo.title}}</p>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<style scoped>
.thumbnail {
  width: 220px;
  height: auto;
}
</style>

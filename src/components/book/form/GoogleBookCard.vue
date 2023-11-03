<script setup>
import {computed} from "vue";

const props = defineProps({
  book: {
    type: Object,
  },
  useBook: {
    type: Function,
  },
});

const thumbnail = computed(() => {
  let i = props.book.volumeInfo.imageLinks.smallThumbnail;
  if(i) return i;
  else return "https://www.prachiindia.com/ModuleFiles/Items/Cover_image.png";
});

const authors = computed(() => {
  return props.book.volumeInfo.authors.join(", ");
});
</script>

<template>
  <q-card class="q-mb-md card" @click="useBook(book)">
    <q-card-section horizontal>
      <div class="row">
        <div class="col-auto q-pr-sm">
          <q-img class="thumbnail" :src="thumbnail"></q-img>
        </div>
        <div class="col">
          <p v-if="book.volumeInfo.title" class="text-subtitle1 text-weight-bolder">{{book.volumeInfo.title}}</p>
          <p v-if="book.volumeInfo.authors" class="text-subtitle2">{{authors}}</p>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<style scoped>
.thumbnail {
  width: 125px;
  height: auto;
}

.card {
  cursor: pointer;
}

.card:hover {
  outline: black solid 2px;
}
</style>

<script setup>
import BasicFullScreenModal from "components/basics/BasicFullScreenModal.vue";
import {ref} from "vue";
import BasicLabel from "components/basics/BasicLabel.vue";
import BasicPillsArray from "components/basics/BasicPillsArray.vue";

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
    Book Details
  </template>
  <template #content>
    <div class="container">
      <div class="row q-mt-md">
        <div class="col flex justify-center q-pr-md q-mb-md">
          <q-img fit="contain" width="250px" :src="book.thumbnail" class="thumbnail"></q-img>
        </div>
        <div class="col-12 col-sm-6">
          <p class="text-h5 q-mb-none">{{book.title}}</p>
          <p v-if="book.subtitle" class="text-italic text-subtitle1 q-mb-md q-pl-sm">{{book.subtitle}}</p>
          <hr>
          <BasicLabel v-if="book.authors.length > 0" label="Author(s)" icon="group">
            <p>{{book.authors.join(', ')}}</p>
          </BasicLabel>
          <BasicLabel v-if="book.isbn" label="ISBN" icon="tag">
            <p>{{book.isbn}}</p>
          </BasicLabel>
          <BasicLabel v-if="book.publisher" label="Publisher" icon="print">
            <p>{{book.publisher}}</p>
          </BasicLabel>
          <BasicLabel v-if="book.publishedDate" label="Publish Date" icon="event">
            <p>{{book.publishedDate}}</p>
          </BasicLabel>
          <BasicLabel v-if="book.categories.length>0" label="Categories" icon="category">
<!--            <p>{{book.categories.join(', ')}}</p>-->
            <BasicPillsArray :pills="book.categories"></BasicPillsArray>
          </BasicLabel>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <BasicLabel v-if="book.description" label="Description" icon="description">
            <p>{{book.description}}</p>
          </BasicLabel>
        </div>
      </div>
    </div>
  </template>
</BasicFullScreenModal>
</template>

<style scoped>
.thumbnail {
  //filter: drop-shadow(0 0 20px black);
}
</style>

<script setup>
import Book from "src/models/Book";
import {computed} from "vue";
import BasicLabel from "components/basics/BasicLabel.vue";
import DeleteBookModal from "components/modals/DeleteBookModal.vue";

const props = defineProps({
  book: {
    type: Book,
  },
});

const imageUrl = computed(() => {
  if(props.book.thumbnail) return props.book.thumbnail;
  else return "https://www.prachiindia.com/ModuleFiles/Items/Cover_image.png";
});

const authors = computed(() => {
  return props.book.authors.join(", ");
});

</script>

<template>
<q-card class="q-mb-md">
  <q-card-section horizontal>
    <div class="thumbnail-wrapper">
      <q-img class="col-5 thumbnail" :src="imageUrl">
        <q-badge color="info" floating rounded><q-icon size="sm" name="ads_click"/></q-badge>
      </q-img>
    </div>
    <q-card-section>
      <div>
        <p class="text-h5">{{book.title}}</p>
        <BasicLabel v-if="book.authors.length > 0" label="Author(s)" icon="group"><span class="text-subtitle2">{{authors}}</span></BasicLabel>
        <BasicLabel label="ISBN" icon="numbers"><span class="text-subtitle2">{{book.isbn}}</span></BasicLabel>
      </div>
    </q-card-section>
    <q-space/>
    <q-card-actions vertical class="justify-between float-right q-gutter-none">
      <q-btn padding="70% md" size="xl" flat color="dark" icon="edit"></q-btn>
<!--      <q-btn padding="70% md" size="xl" flat color="negative" icon="delete"></q-btn>-->
      <q-space/>
      <DeleteBookModal :title="book.title"/>
    </q-card-actions>
  </q-card-section>
</q-card>
</template>

<style scoped>
.thumbnail {
  cursor: pointer;
  width: 220px;
  height: auto;
  transition: all 0.5s;
}

.thumbnail:hover {
  transform:scale(1.1);
  -ms-transform:scale(1.1); /* IE 9 */
  -moz-transform:scale(1.1); /* Firefox */
  -webkit-transform:scale(1.1); /* Safari and Chrome */
  -o-transform:scale(1.1); /* Opera */

  box-shadow: 0px 0px 15px -2px rgba(0,0,0,0.75);
  -webkit-box-shadow: 0px 0px 15px -2px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 15px -2px rgba(0,0,0,0.75);
}

.thumbnail-wrapper {
  overflow: visible;
}
</style>

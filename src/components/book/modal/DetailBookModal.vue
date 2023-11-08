<script setup>
import BasicFullScreenModal from "components/basics/BasicFullScreenModal.vue";
import {onMounted, ref} from "vue";
import BasicLabel from "components/basics/BasicLabel.vue";
import BasicPillsArray from "components/basics/BasicPillsArray.vue";
import BasicEditButton from "components/basics/buttons/BasicEditButton.vue";
import BasicDeleteButton from "components/basics/buttons/BasicDeleteButton.vue";
import EditBookModal from "components/book/modal/EditBookModal.vue";
import DeleteBookModal from "components/book/modal/DeleteBookModal.vue";
import BasicTabsWithContent from "components/basics/BasicTabsWithContent.vue";

const emit = defineEmits(['showEditModal', 'showDeleteModal']);
const props = defineProps({
  book: {
    type: Object,
  },
  allCategories: {
    type: Array,
    default: [],
  },

});

const modal = ref(null);

function openModal() {
  modal.value.show();
}

function showEditModal() {
  emit('showEditModal');
}

function showDeleteModal() {
  emit('showDeleteModal');
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

      <BasicTabsWithContent :tab-names="['Info', 'Log']" alignment="left">
        <template #Info-tab>
          <span><q-icon name="info" size="md"/>&nbsp;Info</span>
        </template>
        <template #Log-tab>
          <span><q-icon name="list" size="md"/>&nbsp;Reading Log</span>
        </template>

        <template #Info-content>
          <div class="row q-mt-md">
            <div class="col flex justify-center q-pr-md q-mb-md">
              <div class="row">
                <div class="col-12 flex justify-center q-pb-md">
                  <q-img fit="contain" width="250px" :src="book.thumbnail" class="thumbnail"></q-img>
                </div>
                <div class="col-6">
                  <BasicEditButton :show-modal="showEditModal">
                    <q-tooltip class="bg-dark text-body2">
                      Edit
                    </q-tooltip>
                  </BasicEditButton>
                </div>
                <div class="col-6">
                  <BasicDeleteButton :show-modal="showDeleteModal">
                    <q-tooltip class="bg-negative text-body2">
                      Delete
                    </q-tooltip>
                  </BasicDeleteButton>
                </div>
              </div>
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
        </template>
        <template #Log-content>
          Reading Log
        </template>
      </BasicTabsWithContent>
    </div>
  </template>
</BasicFullScreenModal>
</template>

<style scoped>
.thumbnail {
  //filter: drop-shadow(0 0 20px black);
}
</style>

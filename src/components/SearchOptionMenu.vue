<script setup>
import {ref} from "vue";
import BasicCategoryPicker from "components/basics/BasicCategoryPicker.vue";

const props = defineProps({
  allCategories: {
    type: Array,
    default: [],
  }
});

const expanded = ref(false);
const searchCategories = ref([]);

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
        <div class="row">
          <div class="col-12 col-md-6">

          </div>
          <div class="col-12 col-md-6">
            <BasicCategoryPicker :all-categories="allCategories" :selected-categories="searchCategories" :appendable="false"/>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-expansion-item>
</template>

<style scoped>

</style>

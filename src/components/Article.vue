<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';  
import Header from './Header.vue';
import Sidebar from './Sidebar.vue';

const article = ref(null);
const articleUrl = '/article.json';
const route = useRoute();
const articleID = route.params.linkUrl;

onMounted(async () => {
  try {
    const response = await axios.get(articleUrl);
    article.value = response.data.find(a => a.linkUrl == articleID) || {};
  } catch (error) {
    console.error("Fehler beim Laden der JSON-Datei:", error);
  }
});

const currentContentType = computed(() => article.value?.contentType || '');

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
};
</script>

<template>
  <div v-if="article" class="container-fluid p-0" style="background-color: #f8f9fa">
    <Header :title="article?.title || 'Lädt...'"></Header>

    <div class="row">
      <div class="col-md-2">
        <Sidebar :currentContentType="currentContentType"></Sidebar>
      </div>

      <div class="col-md-10">
        <div class="image-container mb-3">
          <img 
            :src="article?.imageSrc || '/assets/Bilder/placeholder.svg'" 
            :alt="article?.title || 'Artikelbild'"
            class="img-fluid w-100"
          />
        </div>

        <p><em>{{ formatDate(article.timeOfCreation) }}</em></p>

        <div v-for="(section, index) in article.content" :key="index" class="article-section mb-4">
          <h2>{{ section.sectionTitle }}</h2>
          <p>{{ section.text }}</p>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="loading text-center">
    <p>Lade Artikel...</p>
  </div>
</template>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: #777;
}

.container-fluid {
  padding-left: 0;
  padding-right: 0;
}

.image-container {
  height: 200px;
  overflow: hidden;
  margin-left: -10px; /* Extend the image to the left */
}

.loading {
  font-size: 1.2em;
  color: #777;
}

.article-section h2 {
  font-size: 1.5em;
}
</style>
<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import Preview from './Preview.vue';
import Header from './Header.vue';
import Sidebar from './Sidebar.vue';

const articles = ref([]);
const route = useRoute();
const contentType = ref(route.params.contentType);

const fetchArticles = async () => {
  try {
    const response = await axios.get('/article.json');
    articles.value = response.data.filter(article => {
        return article.contentType && article.contentType.toLowerCase() === contentType.value.toLowerCase();
    });
  } catch (error) {
    console.error('Fehler beim Laden der Artikel:', error);
  }
};

onMounted(fetchArticles);

watch(() => route.params.contentType, (newContentType) => {
  contentType.value = newContentType;
  fetchArticles();
});
</script>

<template>
  <div class="category-container" style="background-color: #f8f9fa; min-height: 100vh;">
    <Header></Header>
    <!-- Artikelvorschau -->
    <div class="container-fluid">
      <div class="row">
        <div class="col-2 sidebar">
          <Sidebar :currentContentType="contentType"></Sidebar>
        </div>
        <div class="col-8">
          <div class="row" v-if="articles.length > 0">
            <div v-for="article in articles" :key="article.id" class="col-sm-12 col-md-6 col-lg-4 align-items-center mb-3">
              <Preview
                :imageSrc="article.imageSrc || 'Kein Bild verfügbar'"
                :altText="article.title || 'Kein Titel verfügbar'"
                :linkText="article.title || 'Kein Titel verfügbar'"
                :contentText="article.content[1].text"
                :linkUrl="`/article/${article.linkUrl}`"
                :timeOfCreation="article.timeOfCreation"
                class="card h-100"
              />
            </div>
          </div>
          <div v-else class="loading text-center">
              <p>Lade Artikel...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 576px){
  .sidebar {
    display: none;
  }
}
</style>
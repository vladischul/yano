<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Header from './Header.vue';
import Preview from './Preview.vue';
import Sidebar from './Sidebar.vue';

// Reaktive Variable für die Artikel
const articles = ref([]);

// Beispiel: Holen der Artikel von einer API oder einer JSON-Datei
onMounted(async () => {
  try {
    const response = await axios.get('/article.json'); // Pfad zu deiner Artikel-JSON
    articles.value = response.data; // Daten in der reaktiven Variable speichern
    console.log(articles.value);
  } catch (error) {
    console.error('Fehler beim Laden der Artikel:', error);
  }
});

const topics = [
  "innenpolitik",
  "aussenpolitik",
  "wissenschaft"
]

</script>


<template>
  <Header></Header>


  <!-- Artikelvorschau -->
  <div class="container-fluid" v-if="articles.length > 0" style="background-color: #f8f9fa">
    <div class="row">
      <div class="col-2 sidebar">
        <Sidebar></Sidebar>
      </div>
    <div class="col-8">
      <div class="row">
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
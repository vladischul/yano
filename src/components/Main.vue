<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Header from './Header.vue';
import Preview from './Preview.vue';

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

const title = "Hauptseite";

</script>


<template>
  <Header :title="title"></Header>

  <!-- Artikelvorschau -->
  <div class="container-fluid" v-if="articles.length > 0">
    <!-- Left Advertisement Column (col-2) -->
    <div class="row">
      <div class="col-2">
        <div class="advertisement">
          <p>Left Advertisement</p>
        </div>
      </div>
    <div class="col-8">
      <div class="row">
        <div v-for="article in articles" :key="article.id" class="col-4 align-items-center">
          <Preview
            :imageSrc="article.imageSrc || 'Kein Bild verfügbar'"
            :altText="article.title || 'Kein Titel verfügbar'"
            :linkText="article.title || 'Kein Titel verfügbar'"
            :linkUrl="`/article/${article.linkUrl}`"
            :timeOfCreation="article.timeOfCreation"
          />
        </div>
      </div>
    </div>
    <!-- Left Advertisement Column (col-2) -->
    <div class="col-2">
        <div class="advertisement">
          <p>Right Advertisement</p>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
/* Optional: Styling für das Bild */
.article-thumbnail {
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;
}

.article-thumbnail:hover {
  transform: scale(1.05);
}
</style>
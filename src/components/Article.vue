<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';  // Wir nutzen Axios, um das JSON-Dokument zu laden
import Header from './Header.vue';

// Reaktive Variablen für die Artikel-Daten
const article = ref(null);

// Die JSON-Datei, die du laden möchtest (beispielsweise `article.json`)
const articleUrl = '/article.json'; // Oder die URL, wenn von einem Server geladen

const route = useRoute();
const articleID = route.params.id;
console.log(articleID);

// Lade die JSON-Datei, wenn die Komponente gemountet wird
onMounted(async () => {
  try {
    const response = await axios.get(articleUrl);  // Holt die JSON-Datei
    //console.log(response.data);
    article.value = response.data.find(a => a.id == articleID) || {};  // Speichert die geladenen Daten in der reaktiven Variable
    console.log(article.value)
  } catch (error) {
    console.error("Fehler beim Laden der JSON-Datei:", error);
  }
});

</script>

<template>
    <div v-if="article" class="news-article">
      <Header :title="article?.title || 'Lädt...'"></Header>
        <p><em>{{ article.date }}</em></p>

        <!-- Dynamisches Rendern der Artikelabschnitte -->
        <div v-for="(section, index) in article.content" :key="index" class="article-section">
        <h2>{{ section.sectionTitle }}</h2>
        <p>{{ section.text }}</p>
        </div>
    </div>

    <!-- Ladeanzeige, falls die Datei noch nicht geladen wurde -->
    <div v-else class="loading">
        <p>Lade Artikel...</p>
    </div>
</template>

<style scoped>
.news-article {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  margin: 20px;
}

.article-section {
  margin-bottom: 20px;
}

h1 {
  font-size: 2em;
  color: #333;
}

h2 {
  font-size: 1.5em;
  color: #555;
}

p {
  font-size: 1.1em;
  color: #333;
}

.loading {
  text-align: center;
  font-size: 1.2em;
  color: #777;
}
</style>
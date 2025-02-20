<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';
import Header from './Header.vue';
import Article from './Article.vue';
import Preview from './Preview.vue';


const title = "Hauptseite";

const router = useRouter();
const goToArticle = () => {
  router.push('/Article');
};
</script>

<template>
    <Header :title="title"></Header>
    <Preview
    imageSrc="../../assets/Bilder/afdSiegtBeiWahl.jpg"
    altText="Artikel Bild"
    linkText="Klicke hier, um den Artikel zu lesen!"
    linkUrl="/article"
    />


    <!-- Button that triggers programmatic navigation -->
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
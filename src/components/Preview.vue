<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

// Definiere die Props für das Bild und den Text
const props = defineProps({
  imageSrc: {
    type: String,
    required: true
  },
  altText: {
    type: String,
    required: true
  },
  linkText: {
    type: String,
    required: true
  },
  linkUrl: {
    type: String,
    required: true
  }
});

const router = useRouter();

const navigate = () => {
  // Navigiere zu der URL, die in linkUrl übergeben wurde
  router.push(props.linkUrl);
};
</script>

<template>
  <div @click="navigate" style="cursor: pointer; display: flex; align-items: center; gap: 10px;">
    <!-- Das Bild -->
    <img
      :src="props.imageSrc"
      :alt="props.altText"
      style="width: 100px; height: auto; border-radius: 8px;"
    />
    <!-- Der Text -->
    <span class="bold" style="font-size: 25px; color: blue; text-decoration: underline; font-weight: bold">
      {{ props.linkText }}
    </span>
  </div>
</template>

<style scoped>
/* Optionales Styling für das Bild */
.article-thumbnail {
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;
}

.article-thumbnail:hover {
  transform: scale(1.05);
}
</style>

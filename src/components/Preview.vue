<script setup>
import { defineProps } from 'vue';

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
</script>

<template>
  <div @click="() => window.location.href = props.linkUrl" style="cursor: pointer; display: flex; align-items: center; gap: 10px;">
    <!-- Das Bild -->
    <img
      :src="props.imageSrc"
      :alt="props.altText"
      style="width: 100px; height: auto; border-radius: 8px;"
    />
    <!-- Der Text -->
    <span style="font-size: 16px; color: blue; text-decoration: underline;">
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

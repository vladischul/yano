<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

// Definiere die Props für das Bild, den Text und den Link
const props = defineProps({
  imageSrc: {
    type: String
  },
  altText: {
    type: String
  },
  linkText: {
    type: String
  },
  linkUrl: {
    type: String
  }
});

const router = useRouter();

const navigate = () => {
  // Navigiere zu der URL, die in linkUrl übergeben wurde
  router.push(props.linkUrl); 
};
</script>

<template>
  <div class="card col-12" @click="navigate" style="cursor: pointer; display: flex; align-items: center; gap: 10px; margin-bottom:1%">
    <!-- Das Bild -->
    <img
      :src="props.imageSrc"
      :alt="props.altText"
      style="height: auto; border-radius: 8px"
      class="card-img img-fluid"
    />
    <!-- Der Text -->
    <p class="fs-4 fs-sm-5 fs-md-6 text-break">
      {{ props.linkText }}
    </p>
  </div>
</template>

<style scoped>
.article-thumbnail {
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;
}

.article-thumbnail:hover {
  transform: scale(1.05);
}
</style>

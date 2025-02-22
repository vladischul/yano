<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { formatDistanceToNow } from 'date-fns';
import { de } from 'date-fns/locale'

// Definiere die Props für das Bild, den Text und den Link
const props = defineProps({
  imageSrc: {
    type: String,
    default: "/assets/Bilder/placeholder.svg"
  },
  altText: {
    type: String
  },
  linkText: {
    type: String
  },
  linkUrl: {
    type: String
  },
  timeOfCreation: {
    type: String
  }
});

const router = useRouter();
const isHovered = ref(false);

const navigate = () => {
  // Navigiere zu der URL, die in linkUrl übergeben wurde
  router.push(props.linkUrl); 
};

const lastUpdate = () => {
  return formatDistanceToNow(new Date(props.timeOfCreation), {addSuffix: true, locale: de});
}

</script>

<template>
  <div class="col-12 mb-3">
    <div 
      class="card h-100 shadow-sm d-flex flex-column" 
      @click="navigate"
      @mouseover="isHovered = true" 
      @mouseleave="isHovered = false"
      style="cursor: pointer; overflow: hidden;"
    >
      <!-- Textbereich -->
      <div class="card-body d-flex flex-column flex-grow-1">
        <p class="card-title text-center text-break flex-grow-1">
          {{ props.linkText }}
        </p>
        <p class="card-text text-center"><small class="text-muted">Zuletzt bearbeitet {{ lastUpdate() }}</small></p>
      </div>
      <!-- Bild (expanding)-->
      <div class="image-container" :style="{ height: isHovered ? 'auto' : '180px', overflow: 'hidden' }">
        <img 
          :src="props.imageSrc" 
          :alt="props.altText" 
          class="card-img-top img-fluid" 
          :style="{ transform: isHovered ? 'scale(1.3)' : 'scale(1)', transition: 'transform 0.3s ease-in-out' }"
        />
      </div>
    </div>
  </div>
</template>

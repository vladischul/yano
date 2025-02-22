<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { formatDistanceToNow } from 'date-fns';
import { de } from 'date-fns/locale'

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
  contentText: {
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
  router.push(props.linkUrl); 
};

const lastUpdate = () => {
  return formatDistanceToNow(new Date(props.timeOfCreation), { addSuffix: true, locale: de });
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
      <div class="card-body d-flex flex-column flex-grow-1" :style="{ marginBottom: '-0.5rem' }">
        <p class="card-title text-center text-break flex-grow-1">
          {{ props.linkText }}
        </p>
        <div :style="{ height: '4rem', marginBottom: '-1.5rem' }">
          <p 
            class="card-text text-center" 
            :style="{ 
              marginTop: '-1.5rem', 
              fontSize: '0.666666rem', 
              height: isHovered ? '4rem' : '2rem', 
              overflow: 'hidden', 
              textOverflow: 'ellipsis', 
              display: '-webkit-box', 
              WebkitLineClamp: isHovered ? 'unset' : '2', 
              WebkitBoxOrient: 'vertical', 
              transition: 'WebkitLineClamp 0.3s ease-in-out, height 0.3s ease-in-out'
            }"
          >
            {{ props.contentText }}
          </p>
        </div>

        <p class="card-text text-center" :style="{ fontSize: '0.7rem'}"><small class="text-muted">Zuletzt bearbeitet {{ lastUpdate() }}</small></p>
      </div>

      <div class="image-container" style="height: 180px; overflow: hidden;">
        <img 
          :src="props.imageSrc" 
          :alt="props.altText" 
          class="card-img-top img-fluid" 
          :style="{ transform: isHovered ? 'scale(1.2)' : 'scale(1)', transition: 'transform 0.3s ease-in-out', objectFit: 'cover', height: '100%', width: '100%' }"
        />
      </div>
    </div>
  </div>
</template>

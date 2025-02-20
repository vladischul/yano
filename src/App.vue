<script setup>
import { RouterView, useRoute } from 'vue-router';

defineProps({
  parties: {
    type: Object,
    required: true
  }
});

const route = useRoute();
</script>

<template>
    <router-view :route="route"></router-view>
</template>
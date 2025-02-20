<script setup>
import { useRoute, useRouter } from 'vue-router';

defineProps({
  title: {
    type: String,
    required: true
  },
});

const router = useRouter();
const route = useRoute();

const goToMain = () => {
  router.push('/');
};
</script>

<template>
  <nav class="navbar bg-light">
    <div class="container-fluid d-flex justify-content-between align-items-center">
      <button @click="goToMain" class="btn btn-secondary">
        YANO
      </button>

      <span class="navbar-brand mb-0 h1 mx-auto">
        <h1>
          {{ route.name === "Main" ? "Yet Another News Outlet" : route.name }}
        </h1>
      </span>

      <button @click="" class="btn btn-secondary">Login</button>
    </div>
  </nav>
</template>

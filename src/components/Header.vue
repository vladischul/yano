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

      <div class="navbar-brand mx-auto text-center title-break">
        <h1 class="h1 text-truncate" style="max-width: 100%;">
          {{ route.name === "Main" ? "Yet Another News Outlet" : title }}
        </h1>
      </div>

      <button @click="goToLogin" class="btn btn-secondary">
        Login
      </button>
    </div>
  </nav>
</template>
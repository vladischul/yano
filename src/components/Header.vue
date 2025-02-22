<script setup>
import { useRoute, useRouter } from 'vue-router';
import Login from './Login.vue';

const router = useRouter();
const route = useRoute();

const goToMain = () => {
  router.push('/');
};
</script>

<template>
  <nav class="navbar bg-light sticky-top">
    <div class="container-fluid d-flex justify-content-between align-items-center">
      <button @click="goToMain" class="btn btn-secondary">
        YANO
      </button>

      <div class="navbar-brand mx-auto text-center title-break">
        <h1 class="h1 text-truncate" style="max-width: 100%;">
            Yet Another News Outlet
        </h1>
      </div>
      <Login></Login>
    </div>
  </nav>
</template>
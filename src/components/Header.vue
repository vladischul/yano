<script setup>
import { useRoute, useRouter } from 'vue-router';
import Login from './Login.vue';

const router = useRouter();

const goToMain = () => {
  router.push('/');
};
</script>

<template>
  <nav class="navbar bg-light sticky-top">
    <div class="container-fluid d-flex flex-column flex-sm-row justify-content-between align-items-center text-center">
      <button @click="goToMain" class="btn-yano">
        YANO
      </button>

      <div class="navbar-brand title-break">
        <h1 class="h1 text-truncate" style="max-width: 100%;">
            Yet Another News Outlet
        </h1>
      </div>
      <Login></Login>
    </div>
  </nav>
</template>

<style scoped>
.btn-secondary {
  background-color: #6c757d;
  border: none;
  color: white;
}

.btn-secondary:hover {
  background-color: #5a6268;
}

.btn-secondary i {
  font-size: 1.5rem;
}

.icon {
  width: 40px;
  height: auto;
}

.btn-yano {
  background-color: transparent;  
  color: #0a8a34;          
  font-size: 48px;              
  font-weight: bold;       
  border: 3px solid #0a8a34;   
  border-radius: 8px;      
  cursor: pointer;             
  transition: all 0.3s ease;     
  line-height: 0.9;             
}

.btn-yano:hover {
  background-color: #f0f8ff;
  color: #0056b3;
  border-color: #0056b3;
}

.btn-yano:active {
  transform: scale(0.98);
  border-color: #004085;
  color: #004085;
}
* {
  background-color: #f8f9fa;
}
</style>
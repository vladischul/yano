<script setup>
import { useRoute, useRouter } from 'vue-router';
import Login from './Login.vue';
import yanoIcon from '../assets/yano-icon.svg';  // Import the SVG icon

const router = useRouter();
const route = useRoute();

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
  background-color: transparent;  /* Transparent background */
  color: #0a8a34;                 /* Blue text color */
  font-size: 48px;                /* Increased font size for taller letters */
  font-weight: bold;              /* Bold text */
  border: 3px solid #0a8a34;     /* Border around the text */
  border-radius: 8px;             /* Slightly rounded corners on the border */
  cursor: pointer;               /* Pointer cursor on hover */
  transition: all 0.3s ease;      /* Smooth transition on hover */
  line-height: 0.9;               /* Adjust line height to make letters taller */
}

/* Hover effect for the "YANO" text */
.btn-yano:hover {
  background-color: #f0f8ff;      /* Light blue background on hover */
  color: #0056b3;                 /* Darker blue text on hover */
  border-color: #0056b3;          /* Darker border on hover */
}

/* Active state (when the button is clicked) */
.btn-yano:active {
  transform: scale(0.98);         /* Slight shrink effect on click */
  border-color: #004085;          /* Even darker border on click */
  color: #004085;                 /* Darker text color on click */
}

</style>
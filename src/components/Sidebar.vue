<template>
    <div class="sidebar">
      <h3>Kategorien</h3>
      <ul>
        <li v-for="topic in topics" :key="topic">
          <a href="#">{{ topic }}</a>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const topics = ref([
    "Innenpolitik",
    "Außenpolitik",
    "Wissenschaft",
    "Wirtschaft"
  ]);
  </script>
  
  <style scoped>
  .sidebar {
    width: 250px;
    height: 100vh;
    position: fixed;
    background-color: #f8f9fa;
    padding: 20px;
    border-right: 1px solid #ddd;
  }
  
  .sidebar ul {
    list-style: none;
    padding: 0;
  }
  
  .sidebar li {
    margin: 15px 0;
  }
  
  .sidebar a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
    display: block;
  }
  
  .sidebar a:hover {
    color: #007bff;
  }
  </style>
  
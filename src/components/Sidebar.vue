<template>
  <div>
    <button id="arrowbtn" @click="toggleSidebar" :class="{'btn-close': isSidebarVisible, 'btn-open': !isSidebarVisible}" class="btn btn-primary">
      <span class="arrow">{{ isSidebarVisible ? '&#8249;' : '&#8250;' }}</span>
    </button>
    <div :class="{'sidebar': true, 'sidebar-show': isSidebarVisible}">
      <h3>Kategorien</h3>
      <ul>
        <li v-for="topic in topics" :key="topic">
          <router-link :to="`/category/${topic.toLowerCase()}`" :class="{ active: topic.toLowerCase() === currentContentType.toLowerCase() }">{{ topic }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const topics = ref([
  "Innenpolitik",
  "Aussenpolitik",
  "Wissenschaft",
  "Wirtschaft"
]);

const isSidebarVisible = ref(false);

const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value;
  let btn = document.getElementById('arrowbtn');
  btn.style.left = isSidebarVisible.value ? '200px' : '0px';
  btn.style.top = "50%";
};

const props = defineProps({
  currentContentType: {
    type: String,
    default: ''
  }
});
</script>

<style scoped>
.sidebar {
  width: 250px;
  height: 100vh;
  position: fixed;
  left: -250px; /* Verstecke Sidebar außerhalb des Bildschirms */
  background-color: #f8f9fa;
  padding: 20px;
  border-right: 1px solid #ddd;
  transition: left 0.3s ease;
  z-index: 1;
}

.sidebar-show {
  left: 0; /* Sidebar wird sichtbar, wenn die Klasse hinzugefügt wird */
}

.btn {
  position: fixed;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 40px;
  cursor: pointer;
  transition: left 0.3s ease;
  z-index: 2;
  outline: none;
  box-shadow: none;
}

.btn:focus, .btn:active {
  outline: none;
  box-shadow: none;
  background: none;
}

.arrow {
  font-size: 50px;
  color: #0a8a34;
  line-height: 1; /* Ensure consistent line height */
  vertical-align: middle; /* Align the arrow vertically */
}

.btn-open {
  left: 0; /* Button auf der linken Seite */
}

.btn-close {
  left: 200px; /* Button wird rechts von der Sidebar angezeigt, wenn sie geöffnet ist */
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

.sidebar a.active {
  color: #007bff;
  font-weight: bold;
}
</style>

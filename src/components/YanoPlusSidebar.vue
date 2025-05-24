<template>
  <div>
    <button id="plus-arrowbtn" @click="toggleSidebar" class="plus-btn">
      <span class="arrow">{{ isSidebarVisible ? '\u203A' : '\u2039' }}</span>
    </button>
    <div :class="['plus-sidebar', { 'plus-sidebar-show': isSidebarVisible }]">
      Get YANO+ now
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const isSidebarVisible = ref(false);
const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value;
};
</script>

<style scoped>
.plus-sidebar {
  width: 250px;
  height: 100vh;
  position: fixed;
  top: 0;
  right: -250px;
  background-color: #f8f9fa;
  padding: 20px;
  border-left: 1px solid #ddd;
  transition: right 0.3s ease;
  z-index: 20000;
  box-shadow: -2px 0 8px rgba(0,0,0,0.08);
}
.plus-sidebar-show {
  right: 0;
}
.plus-btn {
  position: fixed;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background: #fff;
  border: 2px solid #0a8a34;
  font-size: 40px;
  cursor: pointer;
  transition: right 0.3s ease;
  z-index: 20001;
  outline: none;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  color: #0a8a34;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.arrow {
  font-size: 40px;
  color: #0a8a34;
  line-height: 1;
  vertical-align: middle;
}
</style>

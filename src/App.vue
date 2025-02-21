<script setup>
import { RouterView, useRoute } from 'vue-router';


const route = useRoute();
</script>

<template>
    <router-view :route="route"></router-view>
</template>
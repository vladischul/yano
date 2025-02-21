import { createRouter, createWebHistory } from 'vue-router';
import Main from '../components/Main.vue';

const routes = [
  { path: '/', name: 'Main', component: Main },
  {
    path: '/article/:id',
    name: 'Article',
    component: () => import('../components/article.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

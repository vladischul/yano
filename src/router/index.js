import { createRouter, createWebHistory } from 'vue-router';
import Main from '../components/Main.vue';
import Article from '../components/Article.vue';

const routes = [
  { path: '/', name: 'Main', component: Main },
  {
    path: '/article/:linkUrl',
    name: 'Article',
    component: Article
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
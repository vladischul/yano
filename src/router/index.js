import { createRouter, createWebHistory } from 'vue-router';
import Main from '../components/Main.vue';
import Article from '../components/Article.vue';
import Category from '../components/Category.vue'; // Import the new Category component

const routes = [
  { path: '/', name: 'Main', component: Main },
  {
    path: '/article/:linkUrl',
    name: 'Article',
    component: Article
  },
  {
    path: '/category/:contentType',
    name: 'Category',
    component: Category
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
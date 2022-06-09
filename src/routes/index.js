import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/products',
    name: 'ProductsPage',
    component: () => import('../pages/products.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/products',
    name: 'ProductsPage',
    component: () => import('../pages/products.vue'),
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
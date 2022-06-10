import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/products',
    name: 'ProductsPage',
    component: () => import('../pages/products.vue'),
  },
  {
    path: '/carts',
    name: 'CartsPage',
    component: () => import('../pages/carts.vue'),
  },
  {
    path: '/form',
    name: 'FormPage',
    component: () => import('../pages/form.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
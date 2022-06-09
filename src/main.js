import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import './index.css';

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('./pages/index.vue'),
  },
  {
    path: '/sub',
    name: 'Sub',
    component: () => import('./pages/sub.vue'),
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount('#app');

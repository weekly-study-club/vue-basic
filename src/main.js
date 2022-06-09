import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';
import router from './routes';
import './index.css';

const store = createStore({
  state() {
    return {
      items: [],
    }
  },
  mutations: {
    ADD_ITEM(state, item) {
      state.items.push(item);
    },
  },
  getters: {
    mergedItems(state) {
      const items = state.items;
      const result = [];
      for (let i = 0; i < items.length; i += 1) {
        const item = items[i];
        const name = item.name;
        const index = result.findIndex((value) => value.name === name);
        if (index === -1) {
          result.push(item);
        }
      }
      return result;
    }
  },
});

const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app');

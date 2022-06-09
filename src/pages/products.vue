<style scoped>
  .product {
    display: flex;
    flex-wrap: wrap;
  }
  .product-item {
    margin-right: 20px;
    margin-bottom: 20px;
  }
</style>

<template>
  <div class="product">
    <product-item
      v-for="(product, key) in products"
      :key="key"
      class="product-item"
      :name="product.name"
      :image="product.image"
      @click="onClickCartItem(product)"
      @click:cart-button="onAddCartItem(product)"
    ></product-item>
    <router-link to="/carts">Cart 페이지로 이동</router-link>
  </div>
</template>

<script>
import Products from '../data/products';
import ProductItem from '../components/ProductItem.vue';

export default {
  components: {
    ProductItem,
  },
  data() {
    return {
      products: Products,
    };
  },
  methods: {
    onAddCartItem(product) {
      this.$store.commit('ADD_ITEM', product);
    },
    onClickCartItem(product) {
      const name = product.name;
      window.alert(`${name} 클릭!`);
    },
  },
};
</script>
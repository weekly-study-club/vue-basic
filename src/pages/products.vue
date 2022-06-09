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
    ></product-item>
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
};
</script>
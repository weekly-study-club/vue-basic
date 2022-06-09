<template>
  <div class="carts">
    <span
      v-if="items.length <= 0"
    >
      카트 데이터가 없습니다
    </span>
    <product-item
      v-for="(product, key) in items"
      :key="key"
      class="product-item"
      :name="product.name"
      :image="product.image"
    ></product-item>
  </div>
</template>

<script>
import ProductItem from '../components/ProductItem.vue';

export default {
  components: {
    ProductItem,
  },
  computed: {
    items() {
      return this.$store.getters.mergedItems;
    },
  },
};
</script>

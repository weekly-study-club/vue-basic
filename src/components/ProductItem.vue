<style scoped>
  .product-item {
    width: 250px;
    background-color: white;
    box-shadow: 0 0 8px rgba(0, 0, 0, .4);
  }
  .product-item__image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  .product-item__name {
    padding: 8px;
  }
</style>

<template>
  <div
    class="product-item"
    @click="onClick"
  >
    <img :src="image" class="product-item__image">
    <div class="product-item__name">{{ name }}</div>
    <button
      type="button"
      @click.stop="onAddCart"
    >
      카트에 담기
    </button>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: false,
      default: null,
    },
    name: {
      type: String,
      required: false,
      default: '상품',
    },
  },
  emits: ['click', 'click:cart-button'],
  methods: {
    onClick() {
      this.$emit('click');
    },
    onAddCart() {
      this.$emit('click:cart-button');
    },
  },
}
</script>

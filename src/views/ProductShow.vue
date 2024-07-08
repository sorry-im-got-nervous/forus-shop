<template>
    <div>
      <section v-if="product" class="product">
      <h1>{{product.name}}</h1>
      <div class="product-details">
        <img :src="`/images/${product.image}`" :alt="product.name" />
        <p>{{ product.description }}</p>
        <p>Цена: {{ product.price.toFixed(2) }} ₽</p>
        <button class="btn" @click="addToCart">Добавить в корзину</button>
      </div>
    </section>
    </div>
  </template>
  
  <script>
  import sourceData from '@/data.json';

  
  export default {
    props: {
      id: { type: Number, required: true },
      slug: { type: String, required: true },
    },
    computed: {
      product() {
        return sourceData.products.find(
          (product) => product.id === this.id
        );
      },
    },
    methods: {
  addToCart() {
    const product = {
      id: this.product.id,
      name: this.product.name,
      image: `/images/${this.product.image}`,
      price: this.product.price,
      type: 'product'
    };
    this.$store.dispatch('addToCart', product);
  }
}
  }
  </script>
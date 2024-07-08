<template>
    <div class="clothing-category">
      <div id="clothing-nav">
        <router-link to="/clothing/shirts">Футболки</router-link>
        <router-link to="/clothing/pants">Брюки</router-link>
        <router-link to="/clothing/headwear">Головные уборы</router-link>
        <router-link to="/clothing/home-decor">Домашний декор</router-link>
      </div>
      <h1>{{ categoryName }}</h1>
      <div class="items-grid">
        <router-link
          v-for="product in categoryProducts"
          :key="product.id"
          :to="{ name: 'product.show', params: { id: product.id, slug: product.slug }}"
          class="item product"
        >
          <h2>{{ product.name }}</h2>
          <img :src="`/images/${product.image}`" :alt="product.name" />
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  import sourceData from "@/data.json";
  
  export default {
    data() {
      return {
        products: sourceData.products,
      };
    },
    computed: {
      categoryName() {
        return this.$route.params.category || 'Категория не найдена';
      },
      categoryProducts() {
        return this.products.filter(product => product.category === this.$route.params.category);
      }
    }
  };
  </script>
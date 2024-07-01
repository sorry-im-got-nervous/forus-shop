<template>
    <div class="home">
      <h1>Все товары</h1>
      <div class="items-grid">
        <router-link
          v-for="product in products"
          :key="product.id"
          :to="{name: 'product.show', params:{id: product.id, slug: product.slug}}"
          class="item product"
        >
          <h2>{{ product.name }}</h2>
          <img :src="`/images/${product.image}`" :alt="product.name" />
        </router-link>
  
        <router-link
          v-for="experience in experiences"
          :key="`${experience.productId}-${experience.slug}`"
          :to="{
            name: 'experience.show', 
            params: {
              id: experience.productId, 
              slug: experience.slug
            }
          }"
          class="item experience"
        >
          <h2>{{ experience.name }}</h2>
          <img :src="`/images/${experience.image}`" :alt="experience.name" />
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
        experiences: []
      };
    },
    created() {
      this.experiences = this.products.flatMap(product => 
        product.experiences.map(experience => ({
          ...experience,
          productId: product.id
        }))
      );
    }
  };
  </script>
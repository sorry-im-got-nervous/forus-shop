<template>
  <div v-if="experience">
    <h1>{{ experience.name }}</h1>
    <img :src="`/images/${experience.image}`" :alt="experience.name" />
    <p>{{ experience.description }}</p>
    <p>Цена: {{ experience.price.toFixed(2) }} ₽</p>
    <button class="btn" @click="addToCart">Добавить в корзину</button>
  </div>
  <div v-else>
    <h1>Товар не найден</h1>
  </div>
</template>

<script>
import sourceData from "@/data.json";
import { mapActions } from 'vuex';

export default {
  props: ['id', 'slug', 'experienceSlug'],
  data() {
    return {
      experience: null
    };
  },
  created() {
    this.loadExperience();
  },
  methods: {
    ...mapActions(['addToCart']),
    loadExperience() {
      const product = sourceData.products.find(p => p.id === parseInt(this.id));
      if (product) {
        this.experience = product.experiences.find(e => e.slug === (this.experienceSlug || this.slug));
      }
      if (!this.experience) {
        console.error(`Experience not found for id: ${this.id} and slug: ${this.experienceSlug || this.slug}`);
      }
    },
    addToCart() {
    if (this.experience) {
      const item = {
        id: this.experience.id,
        name: this.experience.name,
        image: `/images/${this.experience.image}`,
        price: this.experience.price,
        type: 'experience',
        productId: parseInt(this.id),
        productSlug: this.slug,
        slug: this.experience.slug
      };
      this.$store.dispatch('addToCart', item);
    }
  }
  },
  watch: {
    $route() {
      this.loadExperience();
    }
  }
};
</script>
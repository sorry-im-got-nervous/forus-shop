<template>
    <div v-if="experience">
      <h1>{{ experience.name }}</h1>
      <img :src="`/images/${experience.image}`" :alt="experience.name" />
      <p>{{ experience.description }}</p>
    </div>
    <div v-else>
      <h1>Товар не найден</h1>
    </div>
  </template>
  
  <script>
  import sourceData from "@/data.json";
  
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
      loadExperience() {
        const product = sourceData.products.find(p => p.id === parseInt(this.id));
        if (product) {
          this.experience = product.experiences.find(e => e.slug === (this.experienceSlug || this.slug));
        }
        if (!this.experience) {
          console.error(`Experience not found for id: ${this.id} and slug: ${this.experienceSlug || this.slug}`);
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
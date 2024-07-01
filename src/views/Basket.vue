<template>
  <div class="basket">
    <h1>Корзина</h1>
    <ul>
      <li v-for="item in cart" :key="item.id" class="product-item">
        <div class="product-image">
          <img :src="item.image" :alt="item.name" />
        </div>
        <div class="product-details">
          <span class="product-name">{{ item.name }}</span>
          <span class="product-price">Цена: {{ item.price.toFixed(2) }} ₽</span>
        </div>
      </li>
    </ul>
    <!-- Итого после списка -->
    <p>Итого: {{ totalPrice.toFixed(2) }} ₽</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['cart']),
    totalPrice() {
      return this.cart.reduce((total, item) => total + item.price, 0);
    }
  },
  methods: {
  goToItem(item) {
    if (item.type === 'experience') {
      const params = {
        id: item.productId,
        slug: item.slug  // Используем slug experience вместо productSlug
      };
      this.$router.push({ 
        name: 'experience.show', 
        params
      });
    } else {
      this.$router.push({ 
        name: 'product.show', 
        params: { 
          id: item.id,
          slug: item.slug
        } 
      });
    }
  }
}
}
</script>

<style scoped>
p {
  text-align: right;
  font-weight: bold;
}
.product-item {
  cursor: pointer;
}
.product-item {
  cursor: pointer;
}
.product-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.product-image {
  width: 80px;
  height: 80px;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
  margin-right: 20px;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.product-details {
  display: flex;
  flex-direction: column;
}
.product-name {
  margin-bottom: 0.5rem; /* Добавляет отступ снизу для имени товара */
}

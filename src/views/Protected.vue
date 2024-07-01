<template>
    <div>
      <h1>Здравствуйте, {{username}}</h1>
      <button class="btn" @click="logout">Выход</button>
      <router-link :to="{name: 'invoices'}">
      </router-link>
    </div>
  </template>
  <script>
  export default {
    data(){
      return {
        username: window.user
      }
    },
    methods:{
      logout(){
        window.user = null
        this.$router.push({name: 'Home', query: {logout: null}})
      }
    }
  }
  </script>
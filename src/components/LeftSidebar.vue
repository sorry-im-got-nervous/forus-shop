<template>
    <ul>
      <li><router-link :to="{name:'protected'}">Профиль</router-link></li>
      <li><router-link :to="{name:'invoices'}">Покупки</router-link></li>
    </ul>
  </template>
  <style scoped>
  ul{
    background: white;
    padding: 10px;
    list-style: none;
    margin-right: 20px;
  }
  li{
    margin:10px;
  }
  </style>
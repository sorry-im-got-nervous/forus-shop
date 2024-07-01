<template>
    <div id="nav">
        <AppLink to="/">Главная</AppLink>
        <AppLink to="/search">Поиск</AppLink>
        <AppLink to="/basket">Корзина</AppLink>
        <AppLink :to="{name: 'protected'}">Профиль</AppLink>
        <AppLink to="/profile">О магазине</AppLink>
  </div>
</template>
<style lang="css">
    #nav .active-link{
        color:#6d78e0;
        border-bottom:2px solid #6d78e0;
    } 
</style>
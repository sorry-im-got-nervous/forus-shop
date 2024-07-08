<template>
    <div id="nav">
        <AppLink to="/">Главная</AppLink>
        <AppLink to="/search">Поиск</AppLink>
        <AppLink to="/basket">Корзина</AppLink>
        <AppLink :to="{name: 'protected'}">Профиль</AppLink>
  </div>
</template>
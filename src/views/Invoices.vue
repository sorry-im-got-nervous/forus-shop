<template>
    <div>
      <h1>Покупки</h1>
    </div>
  </template>
  <script>
  import {onBeforeRouteLeave} from 'vue-router'
  export default {
    setup(){
      onBeforeRouteLeave((to, from)=>{
        const answer = window.confirm(
          'Вы действительно хотите уйти?'
        )
        if(!answer) return false
    })
  }
}
</script>
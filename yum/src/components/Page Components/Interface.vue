<script setup>
  import logo from './Logo.vue'
</script>

<template>
  <div>
    <logo />
    <button @click="$router.push('/Cart')">Cart</button>
  </div>
</template>

<style scoped>
    div{
        display: flex;
        justify-content:space-between;
        align-items: center;
        padding-left: 2%;
        background-color: #212121;
    }

</style>

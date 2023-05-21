<script setup>
  import { ref } from "vue";
  import router from '../router/index'

    var username = ref("");
    var password = ref("");
    var status = ref("");

  function submit () {
    if (username.value === "tmdb" && password.value === "movies"){
        router.push('/Store')
        status.value = ""
    }
    else {
      status.value = "Incorrect username and password"
    }
  }
</script>

<template>
  <div>
    <form @submit.prevent="submit">
      <input type="username" required placeholder="username" v-model="username">
      <input type="password" required placeholder="password" v-model="password">
      <input type="submit" value="Login">
      <p>{{ status }}</p>
    </form>
  </div>
</template>

<style scoped>
</style>

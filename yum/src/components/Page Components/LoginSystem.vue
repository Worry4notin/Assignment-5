<script setup>
  import { ref } from "vue";
  import router from '../../router/index'
  import axios from "axios";
  import { storedData } from '../../stores/data'

  const TMDB_API_KEY = "d12599abac794e3972643d18b8533667";

  const getTMDBData = async (url) => {
  return (await axios.get(url)).data;
  };

    var username = ref("");
    var password = ref("");
    var status = ref("");

  async function submit () {
    if (username.value === "tmdb" && password.value === "movies"){
      
      let movie = await getTMDBData(
        `https://api.themoviedb.org/3//movie/popular?api_key=${TMDB_API_KEY}&language=en-US&adult=false`
        );

      storedData().list = movie

      console.log(storedData().list)

      router.push('/Store')
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
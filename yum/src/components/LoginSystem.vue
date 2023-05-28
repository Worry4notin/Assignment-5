<script setup>
import { ref } from "vue";
import router from "../router/index";
import axios from "axios";
import { storedData } from "../stores/data";
import logo from "./Logo.vue";

const TMDB_API_KEY = "d12599abac794e3972643d18b8533667";

const getTMDBData = async (url) => {
  return (await axios.get(url)).data;
};

var username = ref("");
var password = ref("");
var status = ref("");

async function submit() {
  if (username.value === "tmdb" && password.value === "movies") {
    let movie = await getTMDBData(
      `https://api.themoviedb.org/3//movie/popular?api_key=${TMDB_API_KEY}&language=en-US&adult=false`
    );

    storedData().list = movie;

    router.push("/Store");
  } else {
    status.value = "Incorrect username and password";
  }
}
</script>

<template>
  <logo />
  <div class="login">
    <form @submit.prevent="submit">
      <input type="username" required placeholder="username" v-model="username" />
      <input type="password" required placeholder="password" v-model="password" />
      <input type="submit" value="Login" />
      <p>{{ status }}</p>
    </form>
  </div>
</template>

<style scoped>
.login {
  background-color: #292929;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 88.5vh;
}

input {
  display: block;
  width: 550px;
  height: 50px;
  font-size: 25px;
  padding-left: 1%;
  box-sizing: border-box;
  border-radius: 4px;
}

input[type="submit"] {
  margin-top: 1px;
  font-family: cursive;
}

p {
  color: red;
  font-size: 25px;
  font-family: cursive;
}
</style>

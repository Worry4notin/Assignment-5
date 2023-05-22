<script setup>
import { storedData } from '../stores/data'

const stored = storedData()

import axios from "axios";

const TMDB_API_KEY = "d12599abac794e3972643d18b8533667";

const getTMDBData = async (url) => {
  return (await axios.get(url)).data;
};

async function test (){
let movie = await getTMDBData(
    `https://api.themoviedb.org/3//movie/popular?api_key=${TMDB_API_KEY}&language=en-US&adult=false`
  );

  stored.list = movie

    console.log(stored.list.results)
}
</script>

<template>
    <h1>Test</h1>
    <button @click="test()">Test</button>

</template>

<style scoped>
</style>

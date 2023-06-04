<script setup>
import { storedData } from "../stores/data";

const stored = storedData();

const tempArray = [];

for (let i = 0; i < 20; i++) {
  const tempData = {
    poster: `https://image.tmdb.org/t/p/w500/${stored.list.results[i].poster_path}`,
    data: stored.list.results[i],
  };

  tempArray.push(tempData);
}

function viewProduct(data) {
  storedData().viewTemp = data;

  storedData().isOpen = true;
}
</script>

<template>
  <div class="products">
    <img v-for="path in tempArray" :src="path.poster" @click="viewProduct(path)" />
  </div>
</template>

<style scoped>
.products {
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-template-rows: repeat(4, auto);
  gap: 15px;
  padding: 15px;
  background-color: #292929;
}

img {
  width: 100%;
  height: 100%;
  border-radius: 6px;
}
</style>

<script setup>
import { storedData } from "../stores/data";

function sendCart() {
  storedData().cartContent.push(storedData().viewTemp);
  const noDup = [...new Set(storedData().cartContent)];
  storedData().cartContent = noDup;
  console.log(noDup);
}
</script>

<template>
  <teleport to="body">
    <div class="modal" v-if="storedData().isOpen">
      <div class="content">
        <img :src="storedData().viewTemp.poster" />
        <div>
          <h1>Title</h1>
          <p>{{ storedData().viewTemp.data.title }}</p>
          <h1>Release Date</h1>
          <p>{{ storedData().viewTemp.data.release_date }}</p>
          <div class="button">
            <button @click="storedData().isOpen = false">Close</button>
            <button @click="sendCart()">Purchase</button>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<style scoped>
img {
  width: 100%;
  height: 100%;
  border-radius: 6px;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  background-color: #696969;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  padding-left: 35px;
  padding-right: 35px;
  border-radius: 10px;
  align-items: center;
}
.modal > div > img {
  width: 80%;
  height: 80%;
}

.button {
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  column-gap: 25px;
}

button {
  font-size: 15px;
  font-family: cursive;
  border-radius: 5px;
  padding: 5.5px 10px;
}

h1 {
  color: white;
  font-family: cursive;
}

p {
  color: white;
  font-size: 20px;
  font-family: cursive;
}
</style>

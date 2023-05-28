import { defineStore } from "pinia";
import { ref } from "vue";

export const storedData = defineStore("data", () => {
  const list = ref("");
  const viewTemp = ref("");
  const cartContent = ref("");

  const cartArray = [];
  cartContent.value = cartArray;

  return { list, viewTemp, cartContent };
});

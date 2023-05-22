import { defineStore } from 'pinia'
import { ref } from "vue";

export const storedData = defineStore('data', () => {
    const count = ref(0)
   
    return { count}
  })
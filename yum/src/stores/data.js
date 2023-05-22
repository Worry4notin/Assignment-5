import { defineStore } from 'pinia'
import { ref } from "vue";

export const storedData = defineStore('data', () => {
    const list = ref("")
   
    
    return {list}
  })
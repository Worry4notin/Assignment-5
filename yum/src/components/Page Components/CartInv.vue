<script setup>
    import { storedData } from '../../stores/data'
    import { ref } from "vue";

    console.log(storedData().cartContent)

    function remove(data){

    }


</script>

<template>
    <div>
        <div v-for="data in storedData().cartContent">
        <img :src="data.poster">
        <button>Cancel</button>
        <button>Order</button>
        </div>
    </div>

</template>

<style scoped>
</style>

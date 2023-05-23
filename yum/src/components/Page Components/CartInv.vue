<script setup>
    import { storedData } from '../../stores/data'

    function remove(data){
        if(storedData().cartContent.indexOf(data) != 0){
            storedData().cartContent.splice(storedData().cartContent.indexOf(data),storedData().cartContent.indexOf(data))
        }
        else{
            storedData().cartContent.shift()
        }
    }

</script>

<template>
    <div>
        <div v-for="data in storedData().cartContent">
        <img :src="data.poster">
        <button @click="remove(data)">Cancel</button>
        <button>Order</button>
        </div>
    </div>

</template>

<style scoped>
</style>

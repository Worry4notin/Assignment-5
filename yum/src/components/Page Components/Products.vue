<script setup>
    import { storedData } from '../../stores/data'
    import router from '../../router/index'

    const stored = storedData()

    const tempArray = [];
    
    for (let i = 0; i < 20; i++) {

    const tempData = {id: stored.list.results[i].id, poster: `https://image.tmdb.org/t/p/w500/${stored.list.results[i].poster_path}`}

    tempArray.push(tempData)
    }

    function viewProduct(id) {
        storedData().viewTemp = id

        console.log(id)
        console.log(storedData().viewTemp)

        router.push('/ViewProduct')

    }

</script>

<template>
    <div>
        <img v-for="path in tempArray" :src="path.poster" @click="viewProduct(path.id)" />
    </div>
</template>

<style scoped>
</style>
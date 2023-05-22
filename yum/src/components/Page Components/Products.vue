<script setup>
    import { storedData } from '../../stores/data'

    const stored = storedData()

    const tempArray = [];
    
    for (let i = 0; i < 20; i++) {

    const tempData = {id: stored.list.results[i].id, poster: `https://image.tmdb.org/t/p/w500/${stored.list.results[i].poster_path}`}

    tempArray.push(tempData)
    }

    console.log(tempArray[0].poster)

</script>

<template>
    <div>
        <img v-for="path in tempArray" :src="path.poster" />
    </div>
</template>

<style scoped>
</style>
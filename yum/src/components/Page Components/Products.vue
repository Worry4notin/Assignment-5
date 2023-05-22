<script setup>
    import { storedData } from '../../stores/data'

    const stored = storedData()

    const createMovieTile = (id, poster) => {
        const tile = document.createElement("div");
        const img = document.createElement("img");

        img.src = `https://image.tmdb.org/t/p/w500/${poster}`;

        tile.append(img);
        document.body.append(tile); 

    }

   for (let i = 0; i < 20; i++) {
        createMovieTile(stored.list.results[i].id, stored.list.results[i].poster_path)
    }

</script>

<template>
    <div id="content">
        <p>hell</p>
    </div>
</template>

<style scoped>
</style>
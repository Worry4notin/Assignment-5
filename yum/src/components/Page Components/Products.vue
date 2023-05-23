<script setup>
    import { storedData } from '../../stores/data'
    import { ref } from "vue";

    const stored = storedData()
    
    const isOpen = ref(false)

    const tempArray = [];
    
    for (let i = 0; i < 20; i++) {

    const tempData = {poster: `https://image.tmdb.org/t/p/w500/${stored.list.results[i].poster_path}`, data: stored.list.results[i]}

    tempArray.push(tempData)
    }

    function viewProduct(data) {
        storedData().viewTemp = data

        isOpen.value = true
    }

    function sendCart(){
        storedData().cartContent.push(storedData().viewTemp)
        const noDup = [...new Set(storedData().cartContent)]
        storedData().cartContent = noDup
    }

</script>

<template>
        
    <div>
        <img v-for="path in tempArray" :src="path.poster" @click="viewProduct(path)" />
    </div>

    <div class="root">
        <teleport to ="body">
            <div class="modal" v-if="isOpen">
                <div>
                    <h2>It works</h2>
                    <p>Filler</p>
                    <button @click="isOpen = false">Close</button>
                    <button @click="sendCart()">Purchase</button>
                </div>
            </div>
        </teleport>
    </div>

</template>

<style scoped>

.root{
    position: relative;
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0, 0.5);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal > div {
    background-color: #fff;
    padding: 50px;
    border-radius: 10px;
}

</style>
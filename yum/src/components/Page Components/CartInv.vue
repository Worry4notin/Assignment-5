<script setup>
    import { storedData } from '../../stores/data'

    function remove(data){
        storedData().cartContent.splice(storedData().cartContent.indexOf(data),1)
    }

</script>

<template>
    <div>
        <div v-for="data in storedData().cartContent">
            <div>
                <img :src="data.poster" class="poster">
                <div>
                    <button @click="remove(data)">Cancel</button>
                    <button>Order</button>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
.poster{
    height: 30%;
    width: 30%;
}
</style>

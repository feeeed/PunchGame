<template>
    <div class="rounded-xl bg-zinc-600 mx-2">
        <div class=" bg-gray-800 rounded-t-xl mb-3">
            <div class="text-white text-xl py-4 pl-5">    
            History matches
            </div>
        </div>
        <GameCardList/>

    </div>
</template>

<script setup>
import GameCardList from '@/presentation/components/game-card/GameCardList.vue';

</script>

<style lang="scss" scoped>

</style>
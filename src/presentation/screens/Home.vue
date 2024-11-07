<template>
  <div class="bg-black" >
    <ProfileCard :data = "playerStore.player"/>
    <GameCardList/>

    
   
  </div>  
</template>

<script setup lang="ts">
import { onBeforeMount } from "vue";
import { usePlayerStore } from "@/application/entities/player/model";
import ProfileCard from "../components/main-profile-card/ui/ProfileCard.vue";
import GameCardList from "../components/game-card/GameCardList.vue";
   const playerStore = usePlayerStore();
   onBeforeMount(()=>{
  playerStore.fetchPlayer(155973459);
  
})
  
</script>

<style lang="scss" scoped></style>

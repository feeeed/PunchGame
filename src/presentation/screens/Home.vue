<template>
  <div class="bg-black" >
    <ProfileCard :data = "playerStore.player"/>
    <GamesList/>

    
   
  </div>  
</template>

<script setup lang="ts">
import GamesList from "../widgets/games-list/ui/GamesList.vue";
import { onBeforeMount } from "vue";
import { usePlayerStore } from "@/application/entities/player/model";
import ProfileCard from "../components/main-profile-card/ui/ProfileCard.vue";
   const playerStore = usePlayerStore();
   onBeforeMount(()=>{
  playerStore.fetchPlayer(155973459);
  
})
  
</script>

<style lang="scss" scoped></style>

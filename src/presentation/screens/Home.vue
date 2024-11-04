<template>
  <div>
    <ProfileCard :data = "playerStore.player"/>
   
  </div>  
</template>

<script setup lang="ts">
import { defineComponent, onBeforeMount, onMounted, reactive } from "vue";
import { usePlayerStore } from "@/application/entities/player/model";
import ProfileCard from "../components/MainProfileCard.vue/ui/ProfileCard.vue";
   const playerStore = usePlayerStore();
   onBeforeMount(()=>{
  playerStore.fetchPlayer(155973459);
  
})
  
</script>

<style lang="scss" scoped></style>

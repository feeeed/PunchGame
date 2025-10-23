<template>
  <div class="bg-black">
    <ProfileCard :data="playerStore.player" />
    <GamesList />
  </div>
</template>

<script setup lang="ts">
import GamesList from "../widgets/games-list/ui/GamesList.vue";
import { onBeforeMount } from "vue";
import { usePlayerStore } from "@/application/entities/player/model";
import ProfileCard from "../components/main-profile-card/ui/ProfileCard.vue";
import { useGameStore } from "@/application/entities/game/model";
const playerStore = usePlayerStore();
const gameStore = useGameStore();
onBeforeMount(() => {
  playerStore.fetchPlayer(155973459);
  gameStore.fetchGame();
});
</script>

<style lang="scss" scoped></style>

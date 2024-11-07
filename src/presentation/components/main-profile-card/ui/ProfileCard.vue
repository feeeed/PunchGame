<template>
  <div
    class="max-w mx-auto bg-zinc-900 rounded-xl shadow-md overflow-hidden md:max-w-2xl"
  >
    <div class="flex bg-black justify-between m-3">
      <div class="flex items-center shrink-0">
        <img
          class="h-20 w-20 object-cover p-3 rounded-2xl"
          :src="data.profile.avatarfull"
          alt="Modern building architecture"
        />
        <div class="pl-10 uppercase tracking-wide text-xl text-white font-bold">
          {{ data.profile.personaname }}
        </div>
      </div>

      <div class="shrink-0">
        <img
          class="h-20 w-20 object-cover rounded-xl p-2"
          src="/src/presentation/assets/dota-rangs/SeasonalRank7-2.webp"
          alt="Modern building architecture"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type PlayerModel } from "@/application/entities/player";

const props = defineProps<{
  data: PlayerModel;
}>();
</script>

<style lang="scss" scoped></style>

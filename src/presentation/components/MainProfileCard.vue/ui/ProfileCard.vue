<template>
  <div
    class="max-w mx-auto bg-black rounded-xl shadow-md overflow-hidden md:max-w-2xl"
  >
    <div class="flex">
      <div v-if='data' class="shrink-0">
        <img
          class="h-full w-48 object-cover"
          :src= data.profile.avatarfull
          alt="Modern building architecture"
        />
      </div>
      <div class="p-8">
        <div class="uppercase tracking-wide text-xl text-indigo-500 font-bold">
          {{ data.profile.personaname }}
        </div>
        <p class="mt-2 text-slate-500">
          Looking to take your team away on a retreat to enjoy awesome food and
          take in some sunshine? We have a list of places to do just that.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type PlayerModel  } from "@/application/entities/player";

const props = defineProps<{
  data:PlayerModel
}
>()

</script>

<style lang="scss" scoped></style>

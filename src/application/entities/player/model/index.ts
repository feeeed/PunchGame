import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { PlayerModel } from "./types";
import { getPlayerInfo } from "../api";

export const usePlayerStore = defineStore("player", {
  state: () => {
    return {
      player: {} as PlayerModel,
    };
  },
  getters: {
    getPlayer: ({ player }) => player,
  },
  actions: {
    async fetchPlayer(id: number): Promise<void> {
      const item = await getPlayerInfo(id);
      if (item) {
        this.updateQueryPlayer(item);
      }
    },
    updateQueryPlayer(payload: PlayerModel): void {
      this.player = payload;
    },
  },
});

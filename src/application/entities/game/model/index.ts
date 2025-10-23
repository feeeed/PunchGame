import { defineStore } from "pinia";
import { getMatches } from "../api";

export const useGameStore = defineStore("game",{
    state:()=>{
        return {
            match:{},
            matches:[],
        };
    },
    getters:{
        getGame: ({match}) => match,

    },
    actions:{
        async fetchGame(): Promise<void>{
            const item = await getMatches();
            if(item){
                this.updateQueryGame(item);

            }
        },
        updateQueryGame(payload: any):void {
            this.match = payload
        }
    }
    
})
import { valveRequest } from "@/application/shared/api";
import qs from "qs"

const getMatches = () =>{
    const params = new URLSearchParams([['key','5A6754183910276F68F96E751873D359']])
    valveRequest({method:'get',url:`GetMatchHistory/v1/`,params});
}
    

export {getMatches};






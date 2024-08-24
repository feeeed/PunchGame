import WebApp from "@twa-dev/sdk";
// import { type Ref, ref } from "vue";

interface useTelegramComposableState {
  userInfo: () => void;
}


export default function useTelegram(): useTelegramComposableState {

  function userInfo(): void{
    console.log(WebApp.initDataUnsafe)
    
  }
  return {
    userInfo
  } 
  
}
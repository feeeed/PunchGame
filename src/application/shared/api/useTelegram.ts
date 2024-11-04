import WebApp from "@twa-dev/sdk";

interface useTelegramComposableState {
  userInfo: () => void;
}

export default function useTelegram(): useTelegramComposableState {
  function userInfo(): void {
    console.log(WebApp.initDataUnsafe);
  }
  return {
    userInfo,
  };
}

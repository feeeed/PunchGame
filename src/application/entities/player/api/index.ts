import { request } from "@/application/shared/api";

const getPlayerInfo = (id: number) =>
  request({ url: `players/${id}`, method: "get" });

export { getPlayerInfo };

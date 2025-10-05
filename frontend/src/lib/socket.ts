import { io } from "socket.io-client";
import { envConfig } from "../helper/config";

const SOCKET_URL: string =
  (envConfig.socket_url as string) || "http://localhost:4000";

export const socket = io(SOCKET_URL, {
  withCredentials: true,
});

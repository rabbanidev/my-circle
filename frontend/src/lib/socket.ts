import { io, Socket } from "socket.io-client";

let socket: Socket | null = null;

export const initSocket = (token?: string) => {
  if (socket) socket.disconnect();

  socket = io(import.meta.env.VITE_SOCKET_URL as string, {
    autoConnect: false,
    withCredentials: true,
    transports: ["websocket"],
    auth: { token },
  });

  return socket;
};

export const connectSocket = () => {
  if (socket && !socket.connected) socket.connect();
};

export const disconnectSocket = () => {
  socket?.disconnect();
};

export const updateSocketToken = (token: string) => {
  if (socket) {
    socket.auth = { token };
    socket.connect();
  }
};

export const getSocket = () => {
  return socket;
};

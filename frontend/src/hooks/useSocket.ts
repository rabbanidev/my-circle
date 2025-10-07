import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./index";
import { initSocket, disconnectSocket, updateSocketToken } from "../lib/socket";
import {
  socketConnected,
  socketDisconnected,
  socketUpdateToken,
} from "../rtk/features/socket/socketSlice";

const useSocket = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);

  // TODO: Socket init
  useEffect(() => {
    const socket = initSocket();

    socket.on("connect", () => {
      console.log("✅ Socket connected", socket.id);
      dispatch(socketConnected(socket.id));
    });

    socket.on("disconnect", () => {
      console.log("❌ Socket disconnected");
      dispatch(socketDisconnected());
    });

    socket.on("connect_error", (err) => {
      console.error("❌ Socket connect error:", err.message);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      disconnectSocket();
    };
  }, [dispatch]);

  // TODO: Update token + reconnect when token changes
  useEffect(() => {
    if (auth?.accessToken) {
      updateSocketToken(auth.accessToken);
      dispatch(socketUpdateToken(auth.accessToken));
    } else {
      disconnectSocket();
      dispatch(socketUpdateToken(undefined));
    }
  }, [auth?.accessToken, dispatch]);
};

export default useSocket;

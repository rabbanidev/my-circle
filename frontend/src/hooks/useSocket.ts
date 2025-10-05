import { useEffect } from "react";
import { useAppDispatch } from "./index";
import {
  connectSocket,
  disconnectSocket,
} from "../rtk/features/socket/socketSlice";
import { socket } from "../lib/socket";

const useSocket = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(connectSocket());

    socket.on("connect", () => {
      console.log("✅ Socket Connected:", socket.id);
    });

    socket.on("disconnect", () => {
      console.log("❌ Socket Disconnected");
    });

    return () => {
      dispatch(disconnectSocket());
    };
  }, [dispatch]);
};

export default useSocket;

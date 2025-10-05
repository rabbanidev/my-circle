import { createSlice } from "@reduxjs/toolkit";
import { socket } from "../../../lib/socket";

interface SocketState {
  connected: boolean;
}

const initialState: SocketState = {
  connected: false,
};

const socketSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {
    connectSocket: (state) => {
      if (!socket.connected) {
        socket.connect();
      }
      state.connected = true;
    },
    disconnectSocket: (state) => {
      if (socket.connected) {
        socket.disconnect();
      }
      state.connected = false;
    },
  },
});

export const { connectSocket, disconnectSocket } = socketSlice.actions;
export default socketSlice.reducer;

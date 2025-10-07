import { type PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface SocketState {
  connected: boolean;
  socketId?: string;
  socketToken?: string;
}

const initialState: SocketState = {
  connected: false,
};

const socketSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {
    socketConnected: (state, action) => {
      state.connected = true;
      state.socketId = action.payload;
    },
    socketDisconnected: (state) => {
      state.connected = false;
      state.socketId = undefined;
      state.socketToken = undefined;
    },
    socketUpdateToken: (state, action: PayloadAction<string | undefined>) => {
      state.socketToken = action.payload;
    },
  },
});

export const { socketConnected, socketDisconnected, socketUpdateToken } =
  socketSlice.actions;
export default socketSlice.reducer;

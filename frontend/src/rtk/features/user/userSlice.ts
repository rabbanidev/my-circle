import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IUser } from "../../../types";

// TODO: initial state
const initialState: {
  myInfo: IUser | null;
} = {
  myInfo: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setMyInfo: (
      state,
      action: PayloadAction<{
        user: IUser;
      }>
    ) => {
      state.myInfo = action.payload.user;
    },

    removeMyInfo: (state) => {
      state.myInfo = null;
    },
  },
});

export const { setMyInfo, removeMyInfo } = userSlice.actions;

export default userSlice.reducer;

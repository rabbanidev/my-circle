import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import {
  constants,
  getCookie,
  getLocalStorage,
  removeCookie,
  removeLocalStorage,
  setCookie,
  setLocalStorage,
} from "../../../utils";
import { envConfig } from "../../../helper/config";
import type { IAuthState, IAuthUser } from "../../../types";

const localAccessToken: string | undefined = getCookie(constants.ACCESS_TOKEN);
const localUser: IAuthUser | null = getLocalStorage(constants.USERINFO);

// TODO: initial state
const initialState: IAuthState = {
  accessToken: localAccessToken || undefined,
  user: localUser || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loggedIn: (
      state,
      action: PayloadAction<{
        user: IAuthUser;
        accessToken: string;
      }>
    ) => {
      state.accessToken = action.payload?.accessToken;
      state.user = action.payload?.user;

      // TODO: SET access token in Cookies & user data in local Storage
      setCookie(constants.ACCESS_TOKEN, state.accessToken as string, {
        expires: envConfig.access_token_expires_in,
        secure: true,
      });
      setLocalStorage(constants.USERINFO, state.user);
    },
    loggedOut: (state) => {
      state.accessToken = undefined;
      state.user = null;

      // TODO: REMOVE tokens from Cookies & Local Storage
      removeCookie(constants.ACCESS_TOKEN);
      removeLocalStorage(constants.USERINFO);
    },
  },
});

export const { loggedIn, loggedOut } = authSlice.actions;

export default authSlice.reducer;

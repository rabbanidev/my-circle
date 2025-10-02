import { useEffect, useState } from "react";
import { loggedIn } from "../rtk/features/auth/authSlice";
import { constants, getCookie, getLocalStorage } from "../utils";
import type { IAuthUser } from "../types";
import { useAppDispatch } from "./index";

const useAuthCheck = () => {
  const dispatch = useAppDispatch();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const accessToken = getCookie(constants.ACCESS_TOKEN);
    const user = getLocalStorage(constants.USER) as IAuthUser | null;

    if (accessToken && user) {
      dispatch(loggedIn({ accessToken, user }));
    }
    setAuthChecked(true);
  }, [dispatch]);

  return authChecked;
};

export default useAuthCheck;

import { useEffect } from "react";
import { useGetMyInfoQuery } from "../rtk/features/user/userApi";
import type { IAuthUser } from "../types";
import { useAppDispatch, useAuth } from "./index";
import { setMyInfo } from "../rtk/features/user/userSlice";

const useMyInfo = () => {
  const dispatch = useAppDispatch();
  const auth = useAuth() as IAuthUser;
  const { isSuccess, data } = useGetMyInfoQuery(undefined, {
    skip: auth && auth?.id && auth?.role ? false : true,
  });

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(
        setMyInfo({
          user: data,
        })
      );
    }
  }, [data, dispatch, isSuccess]);
};

export default useMyInfo;

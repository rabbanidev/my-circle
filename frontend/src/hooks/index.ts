import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../rtk/app/store";
import usePortal from "./usePortal";
import useOutsideClick from "./useOutsideClick";
import useAuth from "./useAuth";
import useAuthCheck from "./useAuthCheck";
import useMyInfo from "./useMyInfo";

const useAppDispatch = useDispatch.withTypes<AppDispatch>();
const useAppSelector = useSelector.withTypes<RootState>();

export {
  useAppDispatch,
  useAppSelector,
  usePortal,
  useOutsideClick,
  useAuth,
  useAuthCheck,
  useMyInfo,
};

import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../rtk/app/store";
import usePortal from "./usePortal";
import useOutsideClick from "./useOutsideClick";

const useAppDispatch = useDispatch.withTypes<AppDispatch>();
const useAppSelector = useSelector.withTypes<RootState>();

export { useAppDispatch, useAppSelector, usePortal, useOutsideClick };

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

export const useStateDispatch: () => AppDispatch = useDispatch;
export const useStateSelector: TypedUseSelectorHook<RootState> = useSelector;
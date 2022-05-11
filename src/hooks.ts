import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./app/store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// 自定義hook export出去給組件使用
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

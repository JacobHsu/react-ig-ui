import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { homeApi } from "services/homeServices";
import friendReducer from "slices/friendSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [homeApi.reducerPath]: homeApi.reducer,
    friendReducer,
  },
  // middleware 把 api services 綁定到 store
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(homeApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth";
import { usersSlice } from "./users/usersSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    users: usersSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

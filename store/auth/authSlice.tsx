import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "./interface";

const initialState: AuthState = {
  status: "checking",
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
  registerErrorMessage: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    //Login State
    login: (state, { payload }: PayloadAction<AuthState>) => {
      state.status = "authenticated";
      state.uid = payload?.uid;
      state.email = payload?.email;
      state.displayName = payload?.displayName;
      state.photoURL = payload.photoURL;
      state.errorMessage = null;
    },
    //Logout State
    logout: (state, { payload }: PayloadAction<AuthState>) => {
      state.status = "not-authenticated";
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.errorMessage = payload?.errorMessage;
      state.registerErrorMessage = payload?.registerErrorMessage;
    },
    //checkingCredentials
    checkingCredentials: (state) => {
      state.status = "checking";
    },
  },
});

export const { login, logout, checkingCredentials } = authSlice.actions;
export default authSlice.reducer;

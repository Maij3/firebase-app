import { checkingCredentials, login, logout } from "./authSlice";
import {
  logoutFirebase,
  singInWithGoogle,
  registerUserWithEmailPassword,
  loginWithEmailPassword,
} from "../../firebase/providers";

//----CheckingAuthentication----//
export const checkingAuthentication = (email: string, password: string) => {
  return async (dispach: any) => {
    dispach(checkingCredentials());
  };
};

//----StartGoogleSignIn----//
export const startGoogleSignIn = () => {
  return async (dispatch: any): Promise<void> => {
    dispatch(checkingCredentials());
    const result = await singInWithGoogle();
    if (!result.ok) return dispatch(logout(result.errorMessage));
    //delete result.ok;
    dispatch(login(result));
  };
};

//----StartLogout----//
export const startLogout = () => {
  return async (dispatch: any) => {
    const result = await logoutFirebase();
    dispatch(logout(result.errorMessage));
  };
};

//----StartCreatingUserWithEmailPassword----//
export const startCreatingUserWithEmailPassword = (
  email: string,
  password: string,
  displayName: string
) => {
  return async (dispach: any) => {
    dispach(checkingCredentials());
    const { ok, uid, photoURL, errorMessage , registerErrorMessage } =
      await registerUserWithEmailPassword(email, password, displayName);
    if (!ok) return dispach(logout({ registerErrorMessage }));
    dispach(login({ uid, displayName, email, photoURL }));
  };
};

//----StartLoginWithEmailPassword----//
export const startLoginWithEmailPassword = (
  email: string,
  password: string
) => {
  return async (dispach: any) => {
    dispach(checkingCredentials());
    const result = await loginWithEmailPassword(email, password);
    console.log(result)
    if (!result.ok) return dispach(logout(result));
    dispach(login(result));
  };
};



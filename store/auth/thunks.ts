import { checkingCredentials, login, logout } from "./authSlice";
import { signIn } from "next-auth/react";
import {
  logoutFirebase,
  singInWithGoogle,
  registerUserWithEmailPassword,
  loginWithEmailPassword,
} from "../../firebase/providers";
import { startNewUser } from "../users/thunks";

export const checkingAuthentication = (email: string, password: string) => {
  return async (dispach: any) => {
    dispach(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch: any): Promise<void> => {
    dispatch(checkingCredentials());
    const result = await singInWithGoogle();
    if (!result.ok) return dispatch(logout(result.errorMessage));
    //delete result.ok;
    dispatch(login(result));
  };
};

export const startLogout = () => {
  return async (dispatch: any) => {
    const result = await logoutFirebase();
    dispatch(logout(result.errorMessage));
  };
};

export const startCreatingUserWithEmailPassword = (
  email: string,
  password: any,
  displayName: string
) => {
  return async (dispach: any) => {
    dispach(checkingCredentials());
    const { ok, uid, photoURL, errorMessage, registerErrorMessage } =
      await registerUserWithEmailPassword(email, password, displayName);
    if (!ok) return dispach(logout({ registerErrorMessage }));
    dispach(login({ uid, displayName, email, photoURL }));
    await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/",
    });
    dispach(startNewUser())
  };
};

export const startLoginWithEmailPassword = (
  email: string,
  password: string
) => {
  return async (dispach: any) => {
    dispach(checkingCredentials());
    const result = await loginWithEmailPassword(email, password);
    if (!result.ok) return dispach(logout(result));
    dispach(login(result));
  };
};

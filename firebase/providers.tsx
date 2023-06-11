import { FirebaseAuth } from "./config";
import { AuthState } from "../store/auth/interface";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

//-----Google Provider-----///
const googleProvider = new GoogleAuthProvider();

//----Sing in with Google----//
export const singInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    const credentials = GoogleAuthProvider.credentialFromResult(result);
    const { displayName, email, photoURL, uid } = result.user;
    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error: any) {
    //----Error----//
    console.error(error);
    const errorCode = error.code;
    const errorMessage = error.message;
    return {
      ok: false,
      errorCode,
      errorMessage,
    };
  }
};

//----Logout Firebase----//
export const logoutFirebase = async () => {
  try {
    const result = await FirebaseAuth.signOut();
    return {
      ok: true,
    };
  } catch (error: any) {
    const errorMessage = error.message;
    return {
      ok: false,
      errorMessage,
    };
  }
};

//----Register Firebase ----//
export const registerUserWithEmailPassword = async (
  email: string,
  password: string,
  displayName: string
) => {
  try {
    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid, photoURL } = resp.user;
    const currentUser = FirebaseAuth.currentUser!;
    await updateProfile(currentUser, { displayName });
    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName,
    };
  } catch (error: any) {
    console.error(error.message);
    return {
      ok: false,
      errorMessage: error.message,
      registerErrorMessage: error.message
    };
  }
};

//----loginWithEmailPassword----//

export const loginWithEmailPassword = async (
  email: string,
  password: string
) => {
  try {
    const resp = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
     const { uid , photoURL , displayName} = resp.user;
     return {
      ok: true,
      uid,
      photoURL,
      displayName
     }
  } catch (error: any) {
     return {
      ok: false,
      errorMessage: error.message
     }
  }
};

//----ForgotPassword----//
export const forgotPassword = async (email: string) => {
  try {
    const resp = await sendPasswordResetEmail(FirebaseAuth, email);
    return {
      ok: true,
      email,
    };
  } catch (error) {
    console.error(error);
    return {
      ok: false,
    };
  }
};

import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth";
import { ThunkDispatch } from "@reduxjs/toolkit";

export const useChecking = () => {
  const { status , errorMessage } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
     // console.log({ user });
      if (!user) return dispatch(logout({errorMessage}));
      const { uid, email, displayName, photoURL } = user;
      dispatch(login({uid, email, displayName, photoURL,}));
    });
  }, []);
  return status;
};
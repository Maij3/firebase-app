import { deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import {
  addNewUser,
  addUser,
  deleteUserById,
  isSavingNewUser,
} from "./usersSlice";
import { Dispatch } from "redux";
import { FirebaseAuth, FirebaseDB } from "../../firebase/config";
import { loadUsers } from "@/helpers/loadUsers";
import { deleteUser } from "firebase/auth";

export const startNewUser = () => {
  return async (dispatch: Dispatch, getState: () => any) => {
    const { uid, displayName, email } = getState().auth;
    const newAccount = {
      email: email,
      name: displayName,
      role: "guest",
      phone: "",
      message: "",
      birthdate: "",
    };
    const newUser = doc(FirebaseDB, `usuarios/${uid}`);
    await setDoc(newUser, newAccount);
  };
};

export const startLoadingUsers = () => {
  return async (dispatch: Dispatch, getState: () => any) => {
    const { uid } = getState().auth;
    const users = await loadUsers();
    dispatch(addNewUser(users));
  };
};

export const startGetUser = (uid: string | null | undefined) => {
  return async (dispatch: Dispatch, getState: () => any) => {
    const users = await loadUsers();
    users.map((user: any, key: any) => {
      if (user.id === uid) {
        return user;
      }
    });
  };
};

export const startSaveUser = (user:any) => {
  return async (dispatch: Dispatch, getState: () => any) => {
    const uid = user.uid;
    console.log(uid)
      try {
        const docRef = doc(FirebaseDB , `usuarios/${uid}`);
        await setDoc(docRef , user , {merge: true})
        dispatch(addUser(user)) 
      } catch (error) {
          console.error(error) 
      }
  };
};

export const startDeletingNote = (uid: any) => {
  return async (dispatch: Dispatch, getState: () => any) => {
    const docRef = doc(FirebaseDB, `usuarios/${uid}`);
    await deleteDoc(docRef);
    dispatch(deleteUserById(uid));
    // await deleteUser(uid);
  };
};

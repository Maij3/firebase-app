import { doc, setDoc } from "firebase/firestore/lite";
import { addNewUser, isSavingNewUser } from "./usersSlice";
import { Dispatch } from "redux";
import { FirebaseDB } from "../../firebase/config";
import { loadUsers } from "@/helpers/loadUsers";

export const startNewUser = () => {
  return async (dispatch: Dispatch, getState: () => any) => {
    const { uid, name, email } = getState().auth;
    const { users } = getState().users;
    const newAccount = {
      email: email,
      role: "guest",
      phone: " ",
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


export const startGetUser  = (uid:string | null | undefined)=>{
  return async (dispatch:Dispatch , getState:()=>any)=>{
      const users = await loadUsers();
      users.map((user:any , key:any)=>{
        if(user.id === uid){
          return user
        }
      })
  }
}
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User, UserState } from "./interface";
import { authSlice } from "../auth";
import { useTypedSelector } from "@/hooks";
import { RootState } from "../store";

const initialState: UserState = {
  users: [],
  isSaving: false
};

export const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    isSavingNewUser:(state: UserState , action: PayloadAction<boolean>)=>{
        state.isSaving = true
    },
    addNewUser: (state: UserState, action: PayloadAction<any>) => {
      state.users = action.payload;
    },
  },
});

export const { addNewUser , isSavingNewUser} = usersSlice.actions;
export default authSlice.reducer

export const useUserSelector = () =>{
  useTypedSelector((state: RootState)=> state.users.users)
}
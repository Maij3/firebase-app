import { AppLayout } from "@/components/layout";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import { loadUsers } from "../../helpers/loadUsers";
import {
  startGetUser,
  startLoadingUsers,
  startSaveUser,
} from "@/store/users/thunks";
import { AppDispatch, RootState } from "@/store/store";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "@/hooks";
import { useSession, signIn } from "next-auth/react";
import login from "../login";
import { CheckingAuth } from "@/components/ui/CheckingAuth";
import * as Yup from "yup";
import React from "react";
import { useForm } from "@/hooks/useForm";
import { startLoginWithEmailPassword } from "@/store/auth/thunks";
import { ButtonLogout } from "@/components/auth/ButtonLogout";
import { EmailInput } from "@/components/app/EmailInput";
import { TextInput } from "@/components/app/TextInput";
import { PhoneInput } from "@/components/app/phoneInput";
import { User } from "@/components/app/User";
import { TextAreaField } from "@/components/app/TextAreaField";
import { RadioField } from "@/components/app/RadioField";
import { UserForm } from "@/components/app/UserForm";

export default function UserById() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const { id } = router.query;
  const users = useTypedSelector((state: RootState) => state.users.users);
  const dispatch = useDispatch<AppDispatch>();

  const user = users.filter((item: any) => {
    if (item.id === id) {
      return item;
    }
  });

  const onSave = (user: any, event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(startSaveUser(user));
  };

  useEffect(() => {
    const email: any = localStorage.getItem("email");
    const password: any = localStorage.getItem("password");
    dispatch(startLoginWithEmailPassword(email, password));
    if (status === "authenticated") {
      dispatch(startLoadingUsers());
    }
  }, [status]);

  if (status === "loading") {
    return <CheckingAuth />;
  }

  return (
    <AppLayout title={""} pageDescription={""}>
      <ButtonLogout />
      <React.Fragment>
        {status === "authenticated" &&
          user.map((item: any) => {
            return (
              <div className="auth shadow">
                <User value={user} />
                <UserForm user={user} />
              </div>
            );
          })}
      </React.Fragment>
    </AppLayout>
  );
}

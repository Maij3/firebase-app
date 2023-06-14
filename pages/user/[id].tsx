import { AppLayout } from "@/components/layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { loadUsers } from "../../helpers/loadUsers";
import { startGetUser, startLoadingUsers } from "@/store/users/thunks";
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
const initialValues = {
  email: "",
};

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
  const values = Object.assign({}, user[0]);
  const [correo, setCorreo] = useState(values.email);
  useEffect(() => {
    if (status === "authenticated") {
      dispatch(startLoadingUsers());
    }
  }, [status]);

  useEffect(() => {
    const email: any = localStorage.getItem("email");
    const password: any = localStorage.getItem("password");
    dispatch(startLoginWithEmailPassword(email, password));
  }, []);

  const { email, onChange, name, phone } = useForm({
    email: values.email,
    name: values.name,
    phone: values.phone,
  });

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
                <h2>User | {name}</h2>
                <form>
                  <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                      <input
                        type="text"
                        id="floating_first_name"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder="First name"
                        name="name"
                        onChange={onChange}
                        value={name}
                      />
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                      <input
                        type="email"
                        id="floating_email"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder="Email address"
                        name="email"
                        value={email}
                        onChange={onChange}
                      />
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                      <input
                        type="text"
                        id="floating_phone"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder="phone"
                        name="phone"
                        value={phone}
                        onChange={onChange}
                      />
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                      <input
                        type="date"
                        id="floating_date"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      />
                    </div>

                    <div className="relative z-0 w-full mb-6 group">
                      <textarea
                        id="floating_comment"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder="comment"
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn-styles">
                    Submit
                  </button>
                </form>
              </div>
            );
          })}
      </React.Fragment>
    </AppLayout>
  );
}

import { useTypedSelector } from "@/hooks";
import { startCreatingUserWithEmailPassword } from "@/store/auth/thunks";
import { AppDispatch, RootState } from "@/store/store";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
import { startNewUser } from "@/store/users/thunks";
import { useEffect } from "react";
import { CheckingAuth } from "../ui/CheckingAuth";
import React from "react";

export const AuthRegister = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data: session, status } = useSession();
  const router = useRouter();
  const registerErrorMessage = useTypedSelector(
    (state: RootState) => state.auth.registerErrorMessage
  );

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status]);

  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirm_password: "",
      displayName: "",
    },
    onSubmit: async (values) => {
      dispatch(
        startCreatingUserWithEmailPassword(
          values.email,
          values.password,
          values.displayName
        )
      );
    },
    validationSchema: Yup.object({
      displayName: Yup.string().required("Required"),
      email: Yup.string()
        .email("Email does have a valid formart")
        .required("Required"),
      password: Yup.string()
        .min(8, "Password is too short - should be 8 chars minium.")
        .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
        .required("Required"),
      confirm_password: Yup.string()
        .label("Confirm password")
        .required()
        .oneOf([Yup.ref("password")], "Passwords must math"),
    }),
  });

  return (
    <React.Fragment>
      {status === "unauthenticated" && (
        <div className="auth shadow">
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  id="floating_first_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="First name"
                  {...getFieldProps("displayName")}
                />
                {touched.displayName && errors.displayName && (
                  <span style={{ color: "red" }}>{errors.displayName}</span>
                )}
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="email"
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="Email address"
                  {...getFieldProps("email")}
                />
                {touched.email && errors.email && (
                  <span style={{ color: "red" }}>{errors.email}</span>
                )}
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="password"
                  id="floating_password"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="Password"
                  {...getFieldProps("password")}
                />
                {touched.password && errors.password && (
                  <span style={{ color: "red" }}>{errors.password}</span>
                )}
              </div>
              {registerErrorMessage && (
                <div className="alert">{registerErrorMessage}</div>
              )}
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="password"
                  id="floating_password"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="Confirm password"
                  {...getFieldProps("confirm_password")}
                />
                {touched.confirm_password && errors.confirm_password && (
                  <span style={{ color: "red" }}>
                    {errors.confirm_password}
                  </span>
                )}
              </div>
              {registerErrorMessage && (
                <div className="alert">{registerErrorMessage}</div>
              )}
            </div>

            <button type="submit" className="btn-styles">
              Submit
            </button>
          </form>
        </div>
      )}
    </React.Fragment>
  );
};

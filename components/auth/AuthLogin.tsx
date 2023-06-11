import { useDispatch } from "react-redux";
import styles from "./AuthLogin.module.css";
import { AppDispatch, RootState } from "@/store/store";
import { useFormik } from "formik";
import * as Yup from "yup";
import { startLoginWithEmailPassword } from "@/store/auth/thunks";
import { useTypedSelector } from "@/hooks";
import { signIn } from "next-auth/react";

export const AuthLogin = () => {
  const dispatch = useDispatch<AppDispatch>();
  const errorMessage = useTypedSelector(
    (state: RootState) => state.auth.errorMessage
  );
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      //dispatch(startLoginWithEmailPassword(values.email, values.password));
      await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: true,
        callbackUrl: "/",
      });
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email does have a valid formart")
        .required("Required"),
    }),
  });
  return (
    <div className="auth shadow">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        {errorMessage && <div className="alert">{errorMessage}</div>}
        <button type="submit" className="btn-styles">
          Submit
        </button>
      </form>
    </div>
  );
};

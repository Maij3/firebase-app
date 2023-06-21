import { useForm } from "@/hooks/useForm";
import { FC, FormEvent, PropsWithChildren, useEffect } from "react";
import { TextInput } from "./TextInput";
import { startSaveUser } from "@/store/users/thunks";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import router from "next/router";

interface Props {
  user: any[];
}

export const UserForm: FC<PropsWithChildren<Props>> = ({ ...children }) => {
  const user = children.user[0];
  const dispatch = useDispatch<AppDispatch>();
  const { email, message, name, phone, role, birthdate, onChange } = useForm({
    email: user.email,
    message: user.message,
    name: user.name,
    phone: user.phone,
    role: user.role,
    birthdate: user.birthdate,
  });

  const onSave = (user: any, event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      startSaveUser({
        email,
        uid: user.id,
        message,
        name,
        phone,
        role,
        birthdate,
      })
    );
    router.push("/");
  };

  return (
    <form>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder={`First Name`}
            name="name"
            value={name}
            onChange={onChange}
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
            type="phone"
            id="floating_email"
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
            name="birthdate"
            value={birthdate}
            onChange={onChange}
          />
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <textarea
            id="floating_comment"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="message"
            name="message"
            value={message}
            onChange={onChange}
          />
        </div>
        <div className="z-0 w-full mb-6 group">
          <div className="flex items-center ">
            <input
              id="default-radio-1"
              type="radio"
              value="administrator"
              name="role"
              checked={role === "administrator"}
              onChange={onChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-1"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Administrator
            </label>
          </div>
          <div className="flex items-center">
            <input
              checked={role === "guest"}
              id="default-radio-2"
              type="radio"
              value="guest"
              name="role"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={onChange}
            />
            <label
              htmlFor="default-radio-2"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Guest
            </label>
          </div>
        </div>
      </div>
      <button onClick={(e: any) => onSave(user, e)} className="btn-styles">
        Save
      </button>
    </form>
  );
};

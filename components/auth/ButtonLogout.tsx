import React from "react";
import { signOut } from "next-auth/react";

export const ButtonLogout = () => {
  const onSubmit = () => {
    signOut();
  };

  return (
    <div className="flex justify-end mb-5 cursor-pointer">
      <svg
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        onClick={onSubmit}
        className="w-10"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
        ></path>
      </svg>

    </div>
  );
};

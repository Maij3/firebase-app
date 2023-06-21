import { useForm } from "@/hooks/useForm";
import React, { FC, PropsWithChildren, useEffect, useState } from "react";

interface Props {
  value: any;
  placehodler: any;
  name: any;
}

export const TextInput: FC<PropsWithChildren<Props>> = ({ ...children }) => {
  const placeholder = children.placehodler;
  const [value, setValue] = useState(children.value[0].name);

  const { name, onChange } = useForm({
    name: value,
  });

  return (
    <div className="relative z-0 w-full mb-6 group">
      <input
        type="text"
        id="floating_email"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder={placeholder}
        name="name"
        value={name}
        onChange={onChange}
      />
    </div>
  );
};

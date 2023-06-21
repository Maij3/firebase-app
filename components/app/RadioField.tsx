import { useForm } from "@/hooks/useForm";
import React, { useEffect, useState } from "react";

export const RadioField = () => {
  const [value, setValue] = useState("guest");

  const { radio } = useForm({
    radio: value,
  });

  const handleRadioChange = (event: any) => {
    setValue(event.target.value);
  };
  
  return (
    <React.Fragment>
      <div className=" flex  items-center justify-between relative z-0 w-full mb-6 group">
        <div className="flex items-center ">
          <input
            id="default-radio-1"
            type="radio"
            value="administrator"
            name="default-radio"
            onChange={handleRadioChange}
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
            checked
            id="default-radio-2"
            type="radio"
            value="guest"
            name="default-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={handleRadioChange}
          />
          <label
            htmlFor="default-radio-2"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Guest
          </label>
        </div>
      </div>
    </React.Fragment>
  );
};

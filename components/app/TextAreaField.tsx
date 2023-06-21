import { useForm } from "@/hooks/useForm";
import { FC, PropsWithChildren, useState } from "react";

interface Props {
  value: any;
  placeholder: any;
  name: any;
}

export const TextAreaField: FC<PropsWithChildren<Props>> = ({
  ...children
}) => {
  const placeholder = children.placeholder;
  const [value, setValue] = useState(children.value[0].message);

const { message , onChange } = useForm({
  message: value
})

  return (
    <div className="relative z-0 w-full mb-6 group">
      <textarea
        id="floating_comment"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder={placeholder}
        name="message"
        value={message}
        onChange={onChange}
      />
    </div>
  );
};

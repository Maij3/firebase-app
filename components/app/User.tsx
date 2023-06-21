import { FC, PropsWithChildren } from "react";

interface Props {
  value: any;
}

export const User: FC<PropsWithChildren<Props>> = ({ ...children }) => {
  return <h2>User | {children.value[0].name}</h2>;
};

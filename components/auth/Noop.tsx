import React, { FC, PropsWithChildren } from "react";
export const Noop: FC<PropsWithChildren> = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

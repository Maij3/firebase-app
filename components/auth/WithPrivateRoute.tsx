import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { FC, PropsWithChildren } from "react";
import { useTypedSelector } from "@/hooks";
import { RootState } from "@/store/store";

const WithPrivateRoute: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const status = useTypedSelector((state: RootState) => state.auth.status);


  useEffect(() => {
    if (status === "not-authenticated") {
      router.push("/login");
    }
  }, [status]);
  return <>{children}</>;
};

export default WithPrivateRoute;

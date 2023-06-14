import Image from "next/image";
import { Inter } from "next/font/google";
import { AppLayout } from "@/components/layout";
import { Search, Table } from "@/components/app";
import { useSession, signOut, getSession, getCsrfToken } from "next-auth/react";
import { Button } from "flowbite-react";
import { CheckingAuth } from "@/components/ui/CheckingAuth";
import { ButtonLogout } from "@/components/auth/ButtonLogout";
import { useEffect } from "react";
import { AppDispatch } from "@/store/store";
import { useDispatch } from "react-redux";
import { login } from "@/store/auth";
import { startLoadingUsers, startNewUser } from "@/store/users/thunks";
import { loadUsers } from "@/helpers/loadUsers";

export default function Home() {
  const { data: session, status } = useSession();
  const dispatch = useDispatch<AppDispatch>();
  const user = session?.user;


  useEffect(() => {
    if (status === "authenticated") {
      dispatch(
        login({
          displayName: user?.name,
          email: user?.email,
          photoURL: user?.image,
          uid: user?.uid,
          role: user?.role,
        })
      );
     dispatch(startLoadingUsers())
    }
  }, [status]);

  if (status === "loading") {
    return <CheckingAuth />;
  }

  return (
    <AppLayout title={""} pageDescription={""}>
      <ButtonLogout />
      <Search />
      <Table />
    </AppLayout>
  );
}

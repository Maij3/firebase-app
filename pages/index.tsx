import Image from "next/image";
import { Inter } from "next/font/google";
import { AppLayout } from "@/components/layout";
import { Search, Table } from "@/components/app";
import { useSession, signOut } from "next-auth/react";
import { Button } from "flowbite-react";
import { CheckingAuth } from "@/components/ui/CheckingAuth";
import { ButtonLogout } from "@/components/auth/ButtonLogout";
export default function Home() {
  const { data, status } = useSession();

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

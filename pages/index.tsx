import Image from "next/image";
import { Inter } from "next/font/google";
import { AppLayout } from "@/components/layout";
import { Search, Table } from "@/components/app";
import { useSession , signOut } from "next-auth/react";
import { Button } from "flowbite-react";
export default function Home() {
  const { data } = useSession();
  console.log({ data });


const onSubmit  = ()=>{
  signOut();
}


  return (
    <AppLayout title={""} pageDescription={""}>
      {/*         
        Search
        Table
       Pagination
       */}
      <Search />
      <Table />
      <button  onClick={onSubmit}>Logout</button>
    </AppLayout>
  );
}

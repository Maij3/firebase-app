import { Navbar } from "flowbite-react";
import Link from "next/link";
import { useSession } from "next-auth/react";

export const NavbarMenu = () => {
  const { data: session } = useSession();

  return (
    <Navbar fluid={true} rounded={true} className="shadow">
      <Link href={"/"}>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          App
        </span>
      </Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {session?.user && <p>{session.user.name} | {session.user.role}</p>}
        {!session?.user && <Link href="/login">Login </Link>}
        {!session?.user && <Link href={"/register"}>Register</Link>}
      </Navbar.Collapse>
    </Navbar>
  );
};

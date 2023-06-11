import { Navbar } from "flowbite-react";
import Link from "next/link";

export const NavbarMenu = () => {
  return (
    <Navbar fluid={true} rounded={true} className="shadow">
      <Link href={"/"}>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          App
        </span>
      </Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Link href="/login">Login </Link>
        <Link href={"/register"}>Register</Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

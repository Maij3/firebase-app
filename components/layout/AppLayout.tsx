import Head from "next/head";
import React, { FC, PropsWithChildren } from "react";
import { NavbarMenu } from "../ui";
interface Props {
  title: string;
  pageDescription: string;
}

export const AppLayout: FC<PropsWithChildren<Props>> = ({
  children,
  title,
  pageDescription,
}) => {
  return (
    <>
      <Head>
        <title>App</title>
        <meta name="description" content={pageDescription} />
        <meta name="org:title" content={title} />
        <meta name="org:description" content={pageDescription} />
      </Head>
      <div className="container mx-auto">
        <nav>
          <NavbarMenu />
        </nav>
        <main
          style={{
            margin: "80px auto",
            maxWidth: "1440px",
            padding: "0px 30px",
          }}
        >
          {children}
        </main>
      </div>
    </>
  );
};

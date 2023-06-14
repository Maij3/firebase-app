import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { DefaultUser } from "next-auth";
import { loginWithEmailPassword } from "@/firebase/providers";
import { User } from "next-auth";
import Image from "next/image";
import { Session } from "next-auth";
import { loadUsers } from "@/helpers/loadUsers";

interface CustomUser extends Session {
  id: string;
  name: string;
  email: string;
  image: string | null | undefined;
  uid: string | null | undefined;
  role: string | null | undefined;
}

declare module "next-auth" {
  interface Session {
    user: CustomUser;
  }
}
export default NextAuth({
  providers: [
    Credentials({
      name: "Custom Login",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "@example.com" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(
        crendetials:
          | Record<"email" | "password", any | undefined | string | null>
          | undefined
      ) {
        const resp = await loginWithEmailPassword(
          crendetials?.email,
          crendetials?.password
        );

        const { ok, uid, photoURL, displayName } = resp;
        if (ok) {
          return {
            id: uid!,
            name: displayName,
            image: photoURL,
            uid,
            email: crendetials?.email,
          };
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token;
        token.user = user;
      }
      return token;
    },
    async session({ session, token, user }) {
      const resp = await loadUsers();
      let role = "";
      const byId = resp.filter((item: any) => {
        if (item.id === token.sub) {
          role = item.role;
          console.log(item.role);
        }
      });
      session.user.uid = token.sub;
      session.user.role = role;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});

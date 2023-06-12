import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { DefaultUser } from "next-auth";
import { loginWithEmailPassword } from "@/firebase/providers";
import { User } from "next-auth";

interface UserConfig extends User {
  ok: boolean;
  photoURL: string | null | undefined;
  displayName: string | null | undefined;
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
            id: `${uid}`,
            name: displayName,
            image: photoURL,
            email: crendetials?.email
          };
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      if(account){
        token.accessToken = account.access_token;
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      return session;
    },
  },
  pages: {
    signIn: "/login"
  }
});

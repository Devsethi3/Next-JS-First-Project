import NextAuth from "next-auth/next";
import GitHub from "next-auth/providers/github";

export const { handlers, auth, singIn, signOut } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
});

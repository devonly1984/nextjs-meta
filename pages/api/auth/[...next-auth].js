import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";

export const authOptions = {
  providers: [
    FacebookProvider({
      clientId: process.env.FB_ID,
      clientSecret: process.env.FB_SECRET,
    }),
  ],
};

export default NextAuth(authOptions);

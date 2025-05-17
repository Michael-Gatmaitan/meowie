import NextAuth from "next-auth";
// import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

export const BASE_PATH = "/api/auth";

console.log(process.env);

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    // Credentials({
    //   name: "Credentials",
    //   credentials: {
    //     username: { label: "Username", type: "text", placeholder: "michael" },
    //     password: { label: "Password", type: "password" },
    //   },
    //   async authorize(credentials): Promise<User | null> {
    //     const users = [
    //       {
    //         id: "sample-id-1",
    //         username: "michaelpogi",
    //         password: "michaelpogi",
    //         name: "Michael Gatmaitan",
    //         email: "mchlgtmtn@gmail.com",
    //       },
    //     ];
    //
    //     const user = users.find(
    //       (user) =>
    //         user.username === credentials.username &&
    //         user.password === credentials.password,
    //     );
    //     return user
    //       ? {
    //           id: user?.id,
    //           name: user.name,
    //           email: user.email,
    //         }
    //       : null;
    //   },
    // }),
    // Google({
    //   clientId: process.env.AUTH_GOOGLE_ID,
    //   clientSecret: process.env.AUTH_GOOGLE_SECRET,
    // }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],

  basePath: BASE_PATH,
  secret: process.env.NEXTAUTH_SECRET,
});

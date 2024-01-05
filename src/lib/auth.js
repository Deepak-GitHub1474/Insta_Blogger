import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDb } from "./utils";
import { User } from "./models";
import bcrypt from "bcryptjs";

const login = async (credentials) => {
  try {
    connectDb();
    const user = await User.findOne({email: credentials.email});
    if (!user) throw new Error("Wrong credentials!");
    
    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

    if (!isPasswordCorrect) throw new Error("Wrong password!");

    console.log("Logged in!");
    return user;

  } catch (error) {
    console.log(error);
    throw new Error("Failed to login using credentials!")
  }
}

export const {
    handlers: { GET, POST },
    auth, signIn, signOut } = NextAuth({

        providers: [
            GitHub({
                clientId: process.env.GITHUB_CLIENT_ID,
                clientSecret: process.env.GITHUB_SECRET
            }),

            CredentialsProvider({
              async authorize(credentials){
                try {
                  const user = await login(credentials);
                  return user;
                } catch (error) {
                  console.log("Failed to login using credentials!");
                  return null;
                }
              },
            }),
        ],

        callbacks: {
            async signIn({user, account, profile}) {

                if (account.provider === "github") {
                    connectDb();
                    try {
                      const user = await User.findOne({ email: profile.email });
            
                      if (!user) {
                        const newUser = new User({
                          username: profile.login,
                          email: profile.email,
                          img: profile.avatar_url,
                        });
            
                        await newUser.save();
                      }
                    } catch (err) {
                      console.log(err);
                      return false;
                    }
                  }
                return true;
            },
        },

    });
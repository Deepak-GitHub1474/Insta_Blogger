import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { User } from "./models";
import { connectDb } from "./utils";

export const {
    handlers: { GET, POST },
    auth, signIn, signOut } = NextAuth({

        providers: [
            GitHub({
                clientId: process.env.GITHUB_CLIENT_ID,
                clientSecret: process.env.GITHUB_SECRET
            }),
        ],

        callbacks: {
            async signIn({user, account, profile}) {
                // console.log("User ---->",user);
                // console.log("Account ---->",account);
                // console.log("Profile ---->",profile);
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
            }
        }

    })
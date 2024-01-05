"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectDb } from "./utils";
import { signIn, signOut } from "./auth";

export const addBlog = async (formData) => {

    const {title, description, img, userId, slug} = Object.fromEntries(formData);

    try {
        connectDb();
        
        const newPost = new Post({
            title: title,
            description: description,
            img: img,
            userId: userId,
            slug: slug,
        });
        await newPost.save();
        console.log("New blog added to DB");
        revalidatePath("/blog"); //To tell next.js added new blog and show fresh data

    } catch (error) {
        console.log(error);
        return ("Error while adding new blog!");
    }
}

// Delete Blog
export const deleteBlog = async (formData) => {
    const {blogId} = Object.fromEntries(formData);
    try {
        connectDb();

        await Post.findByIdAndDelete(blogId);
        console.log("Blog deleted from DB");
        revalidatePath("/blog");

    } catch (error) {
        console.log(error);
        return ("Something went wrong while deleting blog!");
    }
}

// Login using github account
export const handleGithubLogin = async () =>{
    "use server";
    await signIn("github");
}

// Logout
export const handleLogout = async () =>{
    "use server";
    await signOut();
}

// Signup

export const signup = async (formData) => {
    const {username, email, password, confirmPassword} = Object.fromEntries(formData);

    if (password !== confirmPassword) {
        console.log("password & confirmPassword is not same!");
        return;
    }

    try {
        connectDb();

        const user = await User.findOne({email});

        if (user) {
            console.log("User already exist with this email!");
            return;
        }

        const newUser = new User({
            username: username,
            email: email,
            password: password,
        });
        await newUser.save();
        console.log("New user added!");
        
    } catch (error) {
        console.log(error);
        return ("Error while signup new user!");
    }
}

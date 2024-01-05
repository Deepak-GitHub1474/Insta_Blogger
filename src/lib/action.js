"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

// Add blog
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
        revalidatePath("/blog");

    } catch (error) {
        console.log(error);
        return {error: "Error while adding new blog!"};
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
        return {error: "Something went wrong while deleting blog!"};
    }
}

// Signup
export const signup = async (previousState, formData) => {
    const {username, email, password, confirmPassword} = Object.fromEntries(formData);

    if (password !== confirmPassword) {
        console.log("password & confirmPassword do not match!");
        return {error: "password & confirmPassword do not match!"};
    }

    try {
        connectDb();

        const user = await User.findOne({email});

        if (user) {
            console.log("User already exist");
            return{error: "User already exist"};
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username: username,
            email: email,
            password: hashedPassword,
        });

        await newUser.save();
        console.log("New user added!");
        return {success: true};
        
    } catch (error) {
        console.log(error);
        return {error: "Error while signup new user!"};
    }
}

// Login using github account
export const handleGithubLogin = async () =>{
    "use server";
    await signIn("github");
}

// Login using credential
export const login = async (previousState, formData) => {
    const {email, password} = Object.fromEntries(formData);
    console.log(email, password);
    try {

        await signIn("credentials", {email, password});
        
    } catch (error) {
        console.log(error);

        if (error.message.includes("CredentialsSignin")) {
            return { error: "Invalid username or password" };
        }
        throw error;
    }
}

// Logout
export const handleLogout = async () =>{
    "use server";
    await signOut();
}


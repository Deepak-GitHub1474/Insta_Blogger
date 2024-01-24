"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";
import { v2 as cloudinary } from 'cloudinary';

// Add blog
export const addBlog = async (prevState, formData) => {

    const { title, description, img, userId, slug } = Object.fromEntries(formData);

    try {
        connectDb();

        const newPost = new Post({
            title,
            description,
            img,
            userId,
            slug,
        });
        await newPost.save();
        console.log("New blog added to DB");
        revalidatePath("/blog");
        revalidatePath("/admin");
        return { success: true };

    } catch (error) {
        console.log(error);
        return { error: "Error while adding new blog!" };
    }
}

// Delete Blog
export const deleteBlog = async (formData) => {
    const { id } = Object.fromEntries(formData);

    try {
        connectDb();

        await Post.findByIdAndDelete(id);
        console.log("Blog deleted from DB");
        revalidatePath("/blog");
        revalidatePath("/admin");

    } catch (error) {
        console.log(error);
        return { error: "Something went wrong while deleting blog!" };
    }
}

// Update Blog
export const updateBlog = async (prevState, formData) => {
    const { title, description, img, id } = Object.fromEntries(formData);

    try {
        connectDb();

        const updatedPost = await Post.findByIdAndUpdate(
            id,
            {
                title,
                description,
                img,
            },
            { new: true } // Ensure you get the updated post after the operation
        );

        //console.log("Blog updated:", updatedPost);
        console.log("Blog updated");
        revalidatePath("/blog");
        revalidatePath("/admin");
        return { success: true };
    } catch (error) {
        console.log(error);
        return { error: "Error while updating blog!" };
    }
};


// Add User
export const addUser = async (previousState, formData) => {
    const { username, email, password, img } = Object.fromEntries(formData);

    try {
        connectDb();

        const user = await User.findOne({ email });

        if (user) {
            console.log("User already exist");
            return { error: "User already exist" };
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            img,
        });

        await newUser.save();
        console.log("New user added!");
        revalidatePath("/admin");

    } catch (error) {
        console.log(error);
        return { error: "Error while signup new user!" };
    }
}

// Delete User
export const deleteUser = async (formData) => {
    const { id } = Object.fromEntries(formData);
    try {
        connectDb();

        await Post.deleteMany({ userId: id });
        await User.findByIdAndDelete(id);
        console.log("User deleted from DB");
        revalidatePath("/admin");

    } catch (error) {
        console.log(error);
        return { error: "Something went wrong while deleting user!" };
    }
}

// Signup
export const signup = async (previousState, formData) => {
    const { username, email, password, confirmPassword, img } = Object.fromEntries(formData);

    if (password !== confirmPassword) {
        console.log("password & confirmPassword do not match!");
        return { error: "password & confirmPassword do not match!" };
    }

    try {
        connectDb();

        const user = await User.findOne({ email });

        if (user) {
            console.log("User already exist");
            return { error: "User already exist" };
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        cloudinary.config({
            cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
        });

        const file = img;
        const arrayBuffer = await file.arrayBuffer();
        const buffer = new Uint8Array(arrayBuffer);
        const cloudinaryImgUrl = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream( (error, result) => {
                if (error) {
                    reject(error);
                    return;
                }
                
                resolve(result);
            })
            .end(buffer);
        });

        const newUser = new User({
            username: username,
            email: email,
            password: hashedPassword,
            img: cloudinaryImgUrl?.secure_url
        });

        await newUser.save();
        console.log("New user added!");
        revalidatePath("/auth/register");
        return { success: true };

    } catch (error) {
        console.log(error);
        return { error: "Error while signup new user!" };
    }
}

// Login using github account
export const handleGithubLogin = async () => {
    "use server";
    await signIn("github");
}

// Login using github account
export const handleGoogleLogin = async () => {
    "use server";
    await signIn("google");
}

// Login using credential
export const login = async (previousState, formData) => {
    const { email, password } = Object.fromEntries(formData);

    try {

        await signIn("credentials", { email, password });

    } catch (error) {
        console.log(error);

        if (error.message.includes("CredentialsSignin")) {
            return { error: "Invalid username or password" };
        }
        throw error;
    }
}

// Logout
export const handleLogout = async () => {
    "use server";
    await signOut();
}
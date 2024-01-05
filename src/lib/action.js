"use server";

import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectDb } from "./utils";
import { signIn } from "./auth";

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
        return ("Something went wrong while adding new blog!");
    }
}

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

export const handleGithubLogin = async () =>{
    "use server";
    await signIn("github");
}
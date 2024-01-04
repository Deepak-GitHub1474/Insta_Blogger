import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectDb } from "./utils";

export const addBlog = async (formData) => {
    "use server"

    const {title, description, img, userId, slug} = Object.fromEntries(formData);
    // console.log(title, description, img, userId, slug);

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
        // console.log("Added new blog to DB");
        revalidatePath("/blog"); //To tell next.js added new blog and show fresh data

    } catch (error) {
        console.log(error);
        return ("Something went wrong while adding new blog!")
    }
}
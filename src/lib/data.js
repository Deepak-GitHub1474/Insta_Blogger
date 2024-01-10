import { Post, User } from "./models";
import { connectDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

// Get All posts
export const getPosts = async () => {
    try {
        connectDb();
        const posts = await Post.find();
        // const data= JSON.parse(posts);
        return posts;
    } catch (error) {
        console.log(error);
        throw new Error("Error while fetching all posts!");
    }
};

// Get single post
export const getPost = async (slug) => {
    try {
        connectDb();
        const post = await Post.findOne({ slug });
        return post;
    } catch (error) {
        console.log(error);
        throw new Error("Error while fetching single post!");
    }
}

// Get all the users
export const getUsers = async () => {
    try {
        connectDb();
        const users = await User.find();
        return users;
    } catch (err) {
        console.log(err);
        throw new Error("Error while fetching all users!");
    }
};

// Get single user
export const getUser = async (id) => {
    
    noStore();  // Not cashed to get the refresh data

    try {
        connectDb();
        const user = await User.findById(id);
        return user;
    } catch (error) {
        console.log(error);
        throw new Error("Error while fetching single user!")
    }
}
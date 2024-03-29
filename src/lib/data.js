import { auth } from "./auth";
import { Post, User, Comment } from "./models";
import { connectDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

// Get All posts
export const getPosts = async () => {
    try {
        connectDb();
        const posts = await Post.find();
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
    
    // noStore();  // Not cashed to get the refresh data

    try {
        connectDb();
        const user = await User.findById(id);
        return user;
    } catch (error) {
        console.log(error);
        throw new Error("Error while fetching single user!")
    }
}

// Get Comments
export const getComments = async () => {
    try {
        connectDb();
        const comments = await Comment.find();
        return comments;
    } catch (error) {
        console.log(error);
        throw new Error("Error while fetching all comments!");
    }
};

// Get Logged User
export const loggedUser = async () => {
    // filter user to double check and ensure user exist in DB.

    try {
        connectDb();
        const users = await User.find();
        const session = await auth();
        const loggedUser = users.filter(user => user?.email === session?.user?.email);
        const user = loggedUser[0];
        return user;
    } catch (err) {
        console.log(err);
        throw new Error("Error while fetching all users!");
    }
}
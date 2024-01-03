import { Post, User } from "./models";
import { connectDb } from "./utils";
// import { unstable_noStore as noStore } from "next/cache";


// TEMPORARY Local DB
// const users = [
//   { id: 1, name: "Deepak Chaudhary" },
//   { id: 2, name: "Gaurv Kumar" },
// ];

// const posts = [
//   { id: 1, title: "Post 1", body: "......", userId: 1 },
//   { id: 2, title: "Post 2", body: "......", userId: 1 },
//   { id: 3, title: "Post 3", body: "......", userId: 2 },
//   { id: 4, title: "Post 4", body: "......", userId: 2 },
// ];

// export const getPosts = async (id) => {
//     const post = posts.find(post => post.id === parseInt(id));
//     return post;
// };

// export const getUsers = async (id) => {
//     const user = users.find(user => user.id === parseInt(id));
//     return user;
// };



// <============ MongoDB ============> //

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
    try {
        connectDb();
        const user = await User.findById(id);
        return user;
    } catch (error) {
        console.log(error);
        throw new Error("Error while fetching single user!")
    }
}
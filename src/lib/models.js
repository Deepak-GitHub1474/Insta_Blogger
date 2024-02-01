import mongoose from "mongoose";

// User Schema
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 10
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 30
    },
    password: {
        type: String,
        required: true,
        min: 8,
    },
    img: {
        type: String,
        // required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    bio: {
        type: String,
        default: "Your bio ❤️",
        max: 30
    }
}, { timestamps: true });

// Post Schema
const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        max: 50
    },
    description: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    likesCount: {
        type: Number,
        default: 0,
    },
    userIdLiked: [{
        type: String
    }]
}, { timestamps: true });

// Comment Schema
const commentSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
    commentText: {
        type: String,
        required: true,
    },
    postId: {
        type: String,
        required: true,
    },
}, { timestamps: true });


export const User = mongoose.models?.User || mongoose.model("User", userSchema);
export const Post = mongoose.models?.Post || mongoose.model("Post", postSchema);
export const Comment = mongoose.models?.Comment || mongoose.model("Comment", commentSchema);
import { Post } from "@/lib/models";
import { connectDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (req, {params}) => {

    const {slug} = params;

    try {
        connectDb();
        const post = await Post.findOne({slug});
        return NextResponse.json(post);
    } catch (error) {
        console.log(error);
        throw new Error("Error while fetching all post!");
    }
}

export const DELETE = async (req, {params}) => {

    const {slug} = params;

    try {
        connectDb();
        await Post.deleteOne({slug});
        return NextResponse.json("Post deleted!");
    } catch (error) {
        console.log(error);
        throw new Error("Error while deleting single post!");
    }
}
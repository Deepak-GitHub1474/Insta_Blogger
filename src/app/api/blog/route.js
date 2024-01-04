import { Post } from "@/components/lib/models";
import { connectDb } from "@/components/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    try {
        connectDb();
        const posts = await Post.find();
        return NextResponse.json(posts);
    } catch (error) {
        console.log(error);
        throw new Error("Error while fetching all posts!");
    }
}
import { Post } from "@/components/lib/models";
import { connectDb } from "@/components/lib/utils";
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
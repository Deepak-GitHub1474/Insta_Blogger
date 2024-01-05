import { getPost, getUser } from "@/lib/data";
import Image from "next/image";

// Dynamic metadata
export const generateMetadata = async ({params}) => {
    const {slug} = params;
    const post = await getPost(slug);

    return {
        title: post.title,
        description: post.description,
    }
    
};

const getData = async (slug) => {
    try {
        const res = await fetch(`http://localhost:3000/api/blog/${slug}`); // Get
        // const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {method: "DELETE"}); // DELETE
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        throw new Error("Something went wrong while fetching single blog");
    }
}

const BlogSinglePage = async ({params}) => {
    const {slug} = params;

    // const post = await getPost(slug);
    const user = await getUser(slug);

    const post = await getData(slug);

    return (
        <div className="min-h-[80vh] bg-gray-900 text-white p-4 flex flex-col gap-14">
            <div className="flex flex-col items-center justify-center">
                <div className="w-32 h-32 relative rounded-full overflow-hidden object-cover">
                    <Image src={user.img ? user.img : "/avatar.png"} fill alt="Author-Image" />
                </div>
                <div className="mt-2">
                    <h3 className=" font-semibold font-serif">Author: {user.username ? user?.username[0].toUpperCase()+user?.username.slice(1) : "Anonymous"}</h3>
                    <p className="text-gray-400 font-serif font-extralight text-sm mt-1">Published: {post?.createdAt.toString().slice(4, 16)}</p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:gap-20 gap-10">
                <img src={post?.img} alt="blog-cover" className="sm:w-[400px] sm:h-[400px] w-[90vw] h-[50vh]" />
                <div>
                    <h3 className="font-bold">{post?.title}</h3>
                    <p className="sm:text-lg text-base text-[#dddcdc] font-thin mt-1">{post?.description}</p>
                </div>
            </div>
        </div>
    );
}

export default BlogSinglePage;

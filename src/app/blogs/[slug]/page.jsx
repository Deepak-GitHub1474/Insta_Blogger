import { getPost, getPosts, getUser, getUsers } from "@/components/lib/data";
import Image from "next/image";

// const getData = async (slug) => {
//     try {
//         const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
//         const data = await res.json();
//         return data;
//     } catch (error) {
//         alert("Something went wrong while fetching data");
//     }
// }

const BlogSinglePage = async ({params}) => {

    // console.log(params); // Testing
    const {slug} = params;

    // const post = await getData(slug); //Fetching data using API

    const post = await getPost(slug); // Fetching data without from DB
    const user = await getUser(slug); // Fetching data without from DB
    // console.log(post);
    return (
        <div className="min-h-[80vh] bg-gray-900 text-white p-4 flex flex-col gap-14">
            <div className="flex flex-col items-center justify-center">
                <div className="w-32 h-32 relative rounded-full overflow-hidden">
                    <Image src="/avatar.png" fill alt="Author-Image"/>
                </div>
                <div className="mt-2">
                    <h3 className=" font-semibold font-serif">Author: {user.username}</h3>
                    <p className="text-gray-400 font-serif font-extralight text-sm mt-1">Published: {`12-01-2024`}</p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:gap-20 gap-10">
                <img src="https://img.freepik.com/premium-photo/cute-little-girl-smiling-conversational-chatbot-robot_124507-62437.jpg" alt="blog-cover" className="sm:w-[400px] sm:h-[400px] w-[90vw] h-[50vh]" />
                <div>
                    <h3 className="font-bold">{post?.title}</h3>
                    <p className="sm:text-lg text-base text-[#dddcdc] font-thin mt-1">{post?.body}</p>
                </div>
            </div>
        </div>
    );
}

export default BlogSinglePage;
import PostCard from "@/components/PostCard/PostCard";
import { getPosts } from "@/components/lib/data";
import Link from "next/link";

// const getData = async () => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//     const data = await res.json();
//     return data;
// }

const Blog = async ({params, searchParams}) => {
    // console.log("Params", params, "searchParams",searchParams); // Testing 
    
    // const post = await getData(); // Fetching data using API
    // console.log(post);

    const post = await getPosts();
    console.log(post);

    return (
        <div className="min-h-[80vh] bg-gray-900 text-white">
            {/* <PostCard /> */}

            {post.map(blog => (
                <div className="flex items-center justify-center flex-col" key={blog.id}>
                    <div className=" max-w-[550px] w-[90vw] h-[500px] bg-gray-700 text-white my-4 p-4 pt-0 rounded-lg relative overflow-hidden">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                                <div>username</div>
                                <div className="w-[5px] h-[5px] rounded-full bg-gray-400 mt-1"></div>
                            </div>
                            <div className="w-10 cursor-pointer flex gap-2">
                                <div className="w-2 h-2 rounded-full bg-white"></div>
                                <div className="w-2 h-2 rounded-full bg-white"></div>
                                <div className="w-2 h-2 rounded-full bg-white"></div>
                            </div>
                            
                            {<ul className="w-[120px] bg-gray-400 text-black rounded-md absolute top-8 right-[2px] overflow-hidden">
                                <Link href="" className="Link">
                                    <li className="text-sm font-semibold p-[5px] hover:bg-gray-300 hover:w-[98%] rounded-md cursor-pointer">Edit</li>
                                </Link>
                                <div className="w-[98%] border-t-[0.5px] border-stone-500"></div>
                                <li className="text-sm font-semibold p-[5px] hover:bg-gray-300 hover:w-[98%] rounded-md cursor-pointer">Delete</li>
                            </ul>}
                        </div>
                        <div className="flex justify-center mt-2">
                            <img src="https://img.freepik.com/premium-photo/cute-little-girl-smiling-conversational-chatbot-robot_124507-62437.jpg" alt="blog-cover" className="w-[250px] h-[160px]" />
                        </div>
                        <div className="mt-2 text-center">
                            <b>{blog.title}</b>
                            <p className="absolute right-2 text-gray-400 font-serif font-extralight text-sm">Published: {`12-01-2024`}</p> 
                        </div>
                        <div className="mt-8">
                            <p>{blog.description}</p>
                        </div>
                        <Link href={`/blogs/${post._id}`}>
                            <button className="bg-gray-400 text-black font-bold absolute bottom-0 left-0 right-0 p-2 hover:bg-gray-300">Read</button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Blog;
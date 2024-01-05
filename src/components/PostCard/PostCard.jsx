"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
// import { deleteBlog } from "../lib/action";

// Get all posts
const getData = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/blog");
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
        throw new Error("Error while fetching all posts!");
    }
}

const PostCard = ({posts, users}) => {

    const [data, setData] = useState([]);
    const [isOpen, setIsOpen] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getData();
            setData(data)
        }
        fetchData();
    }, [])
    console.log(data);

    const handleClick = (postId) => {
        if (isOpen === postId) {
            setIsOpen(null);
        } else {
            setIsOpen(postId);
        }
    }

  return (
    <>
      {data.map(blog => (
            <div className="flex items-center justify-center flex-col" key={blog.userId}>
                <div className=" max-w-[550px] w-[90vw] h-[500px] bg-gray-700 text-white my-4 p-4 pt-0 rounded-lg relative overflow-hidden">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                            <div>Author</div>
                            <div className="w-[5px] h-[5px] rounded-full bg-gray-400 mt-1"></div>
                        </div>
                        <div className="cursor-pointer flex gap-[6px] p-1" onClick={() => handleClick(blog._id)}>
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                        
                        {isOpen === blog._id && <ul className="w-[120px] bg-gray-400 text-black rounded-md absolute top-8 right-[2px] overflow-hidden">
                            <Link href="" className="Link">
                                <li className="text-sm font-semibold p-[5px] hover:bg-gray-300 hover:w-[98%] rounded-md cursor-pointer">Edit</li>
                            </Link>
                            <div className="w-[98%] border-t-[0.5px] border-stone-500"></div>
                            {/* Fix delete   onClick={deleteBlog(blog._id)}*/}
                            <li className="text-sm font-semibold p-[5px] hover:bg-gray-300 hover:w-[98%] rounded-md cursor-pointer">Delete</li>
                        </ul>}
                    </div>
                    <div className="flex justify-center mt-2">
                        <img src={blog?.img} alt="post-cover" className="w-[250px] h-[160px]" />
                    </div>
                    <div className="mt-2 text-center">
                        <b>{blog?.title}</b>
                        <p className="absolute right-2 text-gray-400 font-serif font-extralight text-sm">Published: {blog?.createdAt.toString().slice(4, 16)}</p> 
                    </div>
                    <div className="mt-8">
                        <p>{blog?.description}</p>
                    </div>
                    <Link href={`/blogs/${blog.slug}`}>
                        <button className="bg-gray-400 text-black font-bold absolute bottom-0 left-0 right-0 p-2 hover:bg-gray-300">Read</button>
                    </Link>
                </div>
            </div>
        ))}
    </>
  );
};

export default PostCard;

import { deleteBlog } from "@/lib/action";
import { getPosts } from "@/lib/data";
import Image from "next/image";
import { MdDelete } from "react-icons/md";

const AdminPosts = async () => {

    const posts = await getPosts();

    return (
        <div className="flex flex-col gap-2 items-center lg:w-full w-[95vw]">
            <div className="flex items-center justify-center gap-2 w-full">
                <div className="border-t-[0.5px] mt-2 p-1 flex-1 opacity-15 "></div>
                <div className="text-blue-500 font-semibold text-xl">Posts</div>
                <div className="border-t-[0.5px] mt-2 p-1 flex-1 opacity-15"></div>
            </div>

            <div className="flex items-center gap-10 overflow-x-auto max-w-full p-2">
                {posts.map(blog => (
                    <div key={blog._id} className="flex flex-col items-center gap-1 border-[1px] border-gray-700 p-3 rounded-lg hover:scale-[1.05] transition-all">
                        <div className="w-16 h-16 relative rounded-full overflow-hidden ">
                            <Image src={blog.img ? blog.img : "/avatar.png"} fill alt="Author-Image" className="object-cover"/>
                        </div>
                        <div>
                            <p className=" text-[0.9rem] max-w-36 overflow-hidden whitespace-nowrap text-ellipsis">{blog?.title}</p>
                            <p className="text-gray-400 font-serif font-extralight text-[0.8rem] overflow-hidden whitespace-nowrap text-ellipsis">Published: {blog?.createdAt.toString().slice(4, 16)}</p> 
                        </div>
                        <form action={deleteBlog}>
                            <input type="hidden" name="id" value={blog.id} />
                            <button className="text-red-500 hover:text-red-700"><MdDelete size={24} /></button>
                        </form>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AdminPosts;

import { getPosts, loggedUser } from "@/lib/data";
import Image from "next/image";
import { TbPhotoVideo } from "react-icons/tb";
import { FaRegBookmark } from "react-icons/fa";
import { MdGridOn } from "react-icons/md";
import Link from "next/link";

const Page = async () => {

    const user = await loggedUser();
    const posts = await getPosts();
    const filterPost = posts.filter(post => post?.userId === user?._id.toString());

    return (
        <div className="min-h-[80vh] bg-gray-900 text-white py-4">
            <div className="flex flex-col sm:gap-12 gap-6">
                <div className="flex sm:items-center justify-center sm:gap-24 gap-6 pb-4">
                    <div className="sm:w-36 sm:h-36 w-20 h-20 relative rounded-full overflow-hidden object-cover">
                        {user?.img && <Image src={user?.img ? user?.img : "/avatar.png"} fill alt="Author-Image" />}
                        {!user?.image && <img src={ "/avatar.png"} fill alt="Author-Image" />}
                    </div>
                    <div className="flex flex-col sm:gap-8 gap-6">
                        <div className="flex sm:flex-row flex-col sm:gap-10 gap-2">
                            <h3 className="font-semibold text-lg max-w-48 overflow-hidden whitespace-nowrap text-ellipsis">
                                {user?.username && user?.username[0].toUpperCase()+user?.username.slice(1)}
                            </h3>
                            <Link href="/profileupdate" className="bg-gray-700 hover:bg-gray-500 text-sm py-1 sm:px-6 rounded-md text-center">
                                <button>Edit Profile</button>
                            </Link>
                        </div>
                        <div className="sm:flex gap-10 hidden">
                            <span>{`${filterPost.length} posts`}</span>
                            <span>173 followers</span>
                            <span>86 following</span>
                        </div>
                        <div className="max-w-48 font-light">
                            🏡💙
                            "Bazinga!"
                            "Travel like Photon"
                            (x^2 + y^2 - 1)^3 = x^2 y^3
                            ।। सर्वदा स्मर्यतां, त्वं पर्याप्तः।।
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:w-[60vw] w-full mx-auto mt-2">
                <div className="border-t-[0.5px] opacity-15 sm:hidden"></div>
                <div className="flex items-center justify-center gap-10 py-6 sm:hidden">
                    <span>{`${filterPost.length} posts`}</span>
                    <span>173 followers</span>
                    <span>86 following</span>
                </div>
                <div className="border-t-[0.5px] opacity-15"></div>
                <div className="flex items-center justify-around gap-10 my-3">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <MdGridOn size={24}/>
                        <span className="sm:flex hidden text-sm">POSTS</span>
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <TbPhotoVideo size={28}/>
                        <span className="sm:flex hidden text-sm">REELS</span>
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <FaRegBookmark size={24}/>
                        <span className="sm:flex hidden text-sm">SAVED</span>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-1 lg:p-2">
                    {filterPost.map(blog => (
                        <Link href={`/blogs/${blog.slug}`}>
                            <div key={blog._id} className=" bg-gray-800 cursor-pointer">
                                <div className="w-full h-20 sm:h-40 relative overflow-hidden mx-auto">
                                    <Image src={blog.img ? blog.img : "https://media1.tenor.com/m/51xvC35-fDEAAAAC/manhunt.gif"} fill alt="Author-Image" className="object-cover" />
                                </div>
                                <div className="sm:my-6 mx-1 my-2">
                                    <p className="text-[0.9rem] max-w-36 overflow-hidden whitespace-nowrap text-ellipsis">{blog?.title}</p>
                                    <p className="text-gray-400 font-serif font-extralight text-[0.8rem] overflow-hidden whitespace-nowrap text-ellipsis">{blog?.createdAt.toString().slice(4, 16)}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Page;

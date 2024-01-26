"use client";

import { addComment, deleteBlog } from "@/lib/action";

import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";
import { useFormState } from "react-dom";

import {FaRegHeart, FaHeart, FaRegComment} from "react-icons/fa";

const PostCard = ({posts, users, comments, session}) => {

    // console.log(users);

    const [isOpen, setIsOpen] = useState(null);
    const [isCommentBoxOpen, setIsCommentBoxOpen] = useState(null);
    const [state, formAction] = useFormState(addComment, undefined);
    const [commentText, setCommentText] = useState("");

    // Open edit and deleter dialouge-box
    const handleClick = (postId) => {
        if (isOpen === postId) {
            setIsOpen(null);
        } else {
            setIsOpen(postId);
        }
    }

    // Open comment dialouge-box
    const openCommentBox = (postId) => {
        if (isCommentBoxOpen === postId) {
            setIsCommentBoxOpen(null);
        } else {
            setIsCommentBoxOpen(postId);
        }
    }

    // Rest commentText input field
    useEffect(() => {
        setCommentText("")
    }, [comments.length])


  return (
    <>
      {posts.map(blog => (
            <div className="flex items-center justify-center flex-col" key={blog._id}>
                <div className=" max-w-[550px] w-[90vw] h-[500px] bg-gray-700 text-white my-4 p-4 pt-0 rounded-lg relative overflow-hidden shadow-[0_5px_5px_white]">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 mt-1">
                            <div className="relative w-[2rem] h-[2rem] rounded-full overflow-hidden">
                                <img src={users.filter(user =>  user._id === blog.userId).map(user => user.img)} fill alt="post-cover" className="object-cover"/>
                            </div>
                            <div>{users.filter(user =>  user._id === blog.userId).map(user => user.username)}</div>
                            <div className="w-[5px] h-[5px] rounded-full bg-gray-400 mt-1"></div>
                        </div>
                        {session?.user?.id === blog.userId && <div className="cursor-pointer flex gap-[6px] p-1" onClick={() => handleClick(blog._id)}>
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>}
                        
                        {isOpen === blog._id && 
                            <ul className="w-[120px] bg-gray-400 text-black rounded-md absolute top-8 z-50 right-[2px] overflow-hidden">
                                <Link href={`/editblog/${blog.slug}`} className="Link">
                                    <li className="text-sm font-semibold p-[5px] hover:bg-gray-300 w-[98%] rounded-md cursor-pointer">Edit</li>
                                </Link>
                                <div className="w-[98%] border-t-[0.5px] border-stone-500"></div>

                                <form action={deleteBlog}>
                                    <input type="hidden" name="id" value={blog._id} />
                                    <button className="text-sm font-semibold p-[5px] hover:bg-gray-300 w-[98%] text-left rounded-md cursor-pointer">Delete</button>
                                </form>
                            </ul>
                        }
                    </div>
                    <div className="mx-auto mt-2 relative w-[250px] h-[160px]">
                        <Image src={blog?.img} fill alt="post-cover" />
                    </div>
                    <div className="mt-2 text-center">
                        <b>{blog?.title}</b>
                        {<p className="absolute right-2 text-gray-400 font-serif font-extralight text-sm">Published: {blog?.createdAt.toString().slice(4, 16)}</p> }
                    </div>
                    <div className="mt-8">
                        <p className="overflow-y-auto max-h-32 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">{blog?.description}</p>
                    </div>
                    <div className="mt-2 flex items-center justify-between gap-8">
                        <div className="flex flex-col items-center gap-1 text-gray-400 w-1/2">
                                <FaHeart
                                size="28"
                                />
                            <span className="max-w-48 whitespace-nowrap text-ellipsis overflow-hidden text-sm cursor-pointer hover:text-gray-300">30 likes</span>
                        </div>
                        <div className="text-gray-400 w-1/2" >
                            <div className="flex flex-col items-center gap-1" onClick={() => openCommentBox(blog._id)}>
                                <FaRegComment size="28" color="#fff" cursor="pointer" />
                                <span className="max-w-48 whitespace-nowrap text-ellipsis overflow-hidden text-sm cursor-pointer hover:text-gray-300">{comments.filter(comment => blog?._id === comment?.postId).length} comments</span>
                            </div>
                        </div>
                        {isCommentBoxOpen === blog._id && 
                            <div className=" absolute left-0 top-0 z-50">
                                <div className=" bg-white text-black max-w-[550px] w-[90vw] h-[500px] overflow-hidden relative">
                                    <div className="absolute right-0 w-8 h-8 bg-blue-600 text-white font-bold 
                                                    text-center rounded-full pt-1 cursor-pointer hover:bg-blue-500" onClick={() => openCommentBox(blog._id)}>
                                        <span>X</span>
                                    </div>
                                    <section>
                                        <div className="w-10 h-1 bg-gray-600 mx-auto rounded-md m-4"></div>
                                        <p className="text-center font-semibold">Comments</p>
                                        <div className="w-full h-[0.6px] bg-gray-400 mt-2 opacity-80"></div>
                                    </section>

                                    <section className="overflow-y-auto h-[350px]">
                                        {comments.map(comment => (
                                            <>
                                            {blog?._id === comment?.postId && 
                                                <div className="flex gap-4 m-3" key={comment._id}>
                                                    <div className="relative w-[2rem] h-[2rem] rounded-full overflow-hidden border-[0.5px] border-gray-400 mt-1">
                                                        <img src={comment?.img} fill alt="post-cover" className="object-cover"/>
                                                    </div> 
                                                    <div className="flex flex-col gap-2 text-sm">
                                                        <div className="flex items-center gap-2">
                                                            <p className=" font-semibold">{comment?.username}</p>
                                                            <p className="font-semibold text-gray-500 text-xs mt-1">{comment?.createdAt.toString().slice(4, 16)}</p>
                                                        </div>
                                                        <div className="max-w-80">
                                                            <p className="break-words">{comment.commentText}</p>
                                                            {/* TODO REPLY FUNCTIONALITY */}
                                                            <p className="text-gray-700 font-semibold">Reply</p>
                                                            <div className="flex items-center gap-2">
                                                                <div className="w-10 h-[0.6px] bg-gray-400"></div>
                                                                <p className="text-gray-700 font-semibold">View 5 replies</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                            </>
                                        ))}
                                    </section>

                                    <section className="flex flex-col gap-1">
                                        <div className="w-full h-[0.6px] bg-gray-400 mt-[1px] opacity-80"></div>
                                        <div className="flex items-center justify-between text-xl px-1">
                                            <span className="cursor-pointer hover:scale-[1.3] transition-all duration-300" onClick={() => setCommentText("❤️")}>❤️</span>
                                            <span className="cursor-pointer hover:scale-[1.3] transition-all duration-300" onClick={() => setCommentText("😂")}>😂</span>
                                            <span className="cursor-pointer hover:scale-[1.3] transition-all duration-300" onClick={() => setCommentText("😮")}>😮</span>
                                            <span className="cursor-pointer hover:scale-[1.3] transition-all duration-300" onClick={() => setCommentText("😍")}>😍</span>
                                            <span className="cursor-pointer hover:scale-[1.3] transition-all duration-300" onClick={() => setCommentText("🎉")}>🎉</span>
                                            <span className="cursor-pointer hover:scale-[1.3] transition-all duration-300" onClick={() => setCommentText("😭")}>😭</span>
                                            <span className="cursor-pointer hover:scale-[1.3] transition-all duration-300" onClick={() => setCommentText("😞")}>😞</span>
                                            <span className="cursor-pointer hover:scale-[1.3] transition-all duration-300" onClick={() => setCommentText("👏")}>👏</span>
                                            <span className="cursor-pointer hover:scale-[1.3] transition-all duration-300" onClick={() => setCommentText("🔥")}>🔥</span>
                                        </div>
                                        <div className="w-full h-[0.6px] bg-gray-400 mt-[1px] opacity-80"></div>
                                    </section>
                                    
                                    <section className="absolute left-0 right-0 bottom-0 pl-3">
                                        <div className="flex items-center gap-2 p-1 text-sm">
                                            <div className="relative w-[2rem] h-[2rem] rounded-full overflow-hidden border-[0.5px] border-gray-400 mt-1">
                                                <img src={session?.user?.img} fill alt="post-cover" className="object-cover"/>
                                            </div>
                                            <form action={formAction}>
                                                <input type="hidden" name="userId" value={session?.user?.id}/>
                                                <input type="hidden" name="username" value={session?.user?.username}/>
                                                <input type="hidden" name="img" value={session?.user?.img}/>
                                                <input type="hidden" name="postId" value={blog?._id}/>
                                                <input 
                                                    type="text" 
                                                    name="commentText" 
                                                    value={commentText}
                                                    onChange={(e)=> setCommentText(e.target.value)}
                                                    placeholder="Write your comment..." 
                                                    className="p-2 outline-none sm:w-[27rem] w-[21rem]"
                                                />
                                                <button className="ml-1 p-2 text-blue-600 font-semibold hover:text-red-600 transition-all duration-300">post</button>
                                            </form>
                                        </div>
                                    </section>

                                </div>
                            </div>
                        }
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

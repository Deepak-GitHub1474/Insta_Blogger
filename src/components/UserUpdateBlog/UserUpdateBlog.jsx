"use client";

import { updateBlog } from "@/lib/action";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import { toast } from "react-hot-toast";
import Image from "next/image";

const UserUpdateBlog = async ({ post }) => {

  const [state, formAction] = useFormState(updateBlog, undefined);

  const [input, setInput] = useState({
    title: post?.title,
    img: post?.img,
    description: post?.description,
  });

  const router = useRouter();

  const isValidURL = (str) => {
    const pattern = /^(http|https):\/\/[^ "]+$/;
    return !!pattern.test(str);
  };

  const editBlog = async () => {
    if (!input.title || !input.img || !input.description) {
      toast.error("Please fill all fields.");
      return;
    }

    if (input.img && !isValidURL(input.img)) {
      toast.error("Please enter a valid URL in the image field.");
      return;
    }

    toast.success("Blog Updated Successfully");
    router.forward("/blogs");
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-[80vh] bg-gray-900 text-white flex flex-wrap items-center justify-center gap-10 p-4">
      <div className="flex flex-col items-center justify-center">
        <div className="w-32 h-32 relative rounded-full overflow-hidden object-cover">
            <Image src={input?.img ? input?.img : "https://media1.tenor.com/m/51xvC35-fDEAAAAC/manhunt.gif"} fill alt="Post-Image" />
        </div>
        <div className="mt-2">
            <h3 className=" font-semibold font-serif">Title: {input?.title}</h3>
            <p className="text-gray-400 font-serif font-extralight text-sm mt-1">Description: {input?.description}</p>
        </div>
    </div>
      <form
        action={formAction}
        className="flex flex-col gap-2 lg:w-[650px] w-[95vw] bg-gray-700 pb-16 px-2 rounded-lg shadow-[0_5px_5px_white] relative overflow-hidden"
      >
        <h1 className="text-center font-bold text-2xl text-gray-400 mb-2">
          Edit Blog
        </h1>
        <input type="hidden" name="id" value={post?._id} />
        <input
          type="text"
          value={input.title}
          onChange={handleChange}
          name="title"
          placeholder="title"
          className="p-3 rounded-md border-none outline-none bg-gray-800 text-white"
        />
        <input
          type="url"
          name="img"
          value={input.img}
          onChange={handleChange}
          placeholder="paste url"
          className="p-3 rounded-md border-none outline-none bg-gray-800 text-white"
        />
        <textarea
          name="description"
          value={input.description}
          onChange={handleChange}
          cols="10"
          rows="10"
          placeholder="description"
          className="p-3 rounded-md border-none outline-none bg-gray-800 text-white"
        />
        <button
          onClick={editBlog}
          className="bg-gray-400 text-black font-bold absolute bottom-0 left-0 right-0 p-2 hover:bg-gray-300 cursor-pointer"
        >
          Update Blog
        </button>
        <p className=" text-red-500 font-semibold">{state?.error}</p>
      </form>
    </div>
  );
};

export default UserUpdateBlog;

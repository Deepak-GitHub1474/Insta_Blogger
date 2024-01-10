"use client";

import { addBlog } from "@/lib/action";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import { toast } from "react-hot-toast";

const UserPostForm = ({ userId }) => {
  const [state, formAction] = useFormState(addBlog, undefined);
  const [uniqueSlug, setUniqueSlug] = useState(null);

  const [input, setInput] = useState({
        title: "",
        img: "",
        description: "",
  });

  const router = useRouter();

  const isValidURL = (str) => {
    const pattern = /^(http|https):\/\/[^ "]+$/;
    return !!pattern.test(str);
  };

  const addNewBlog = async () => {
    if (!input.title || !input.img || !input.description) {
      toast.error("Please fill all fields.");
      return;
    } 

    if (input.img && !isValidURL(input.img)) {
        toast.error('Please enter a valid URL in the image field.');
        return;
    }
    
    setUniqueSlug(Math.random());
    toast.success("Blog Added Successfully");
    router.forward("/blogs");
    
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  return (
    <form
      action={formAction}
      className="flex flex-col gap-2 lg:w-[650px] w-[95vw] bg-gray-700 pb-16 px-2 rounded-lg shadow-[0_5px_5px_white] relative overflow-hidden"
    >
      <h1 className="text-center font-bold text-2xl text-gray-400 mb-2">
        Add New Blog
      </h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="hidden" name="slug" value={uniqueSlug} />
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
        onClick={addNewBlog}
        className="bg-gray-400 text-black font-bold absolute bottom-0 left-0 right-0 p-2 hover:bg-gray-300 cursor-pointer"
      >
        Add Blog
      </button>
      <p className=" text-red-500 font-semibold">{state?.error}</p>
    </form>
  );
};

export default UserPostForm;

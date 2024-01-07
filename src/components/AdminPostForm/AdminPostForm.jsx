"use client";

import { addBlog } from "@/lib/action";
import { useFormState } from "react-dom";

const AdminPostForm = ({userId}) => {

    const [state, formAction] = useFormState(addBlog, undefined);

    return (
        <form action={formAction}className="flex flex-col gap-2 md:w-[450px] w-[95vw] bg-gray-700 pb-16 px-2 rounded-lg shadow-[0_5px_5px_white] relative overflow-hidden">
            <h1 className="text-center font-bold text-2xl text-gray-400 mb-2">Add New Blog</h1>
            <input type="hidden" name="userId" value={userId} />
            <input type="text" name="title" placeholder="title" className="p-3 rounded-md border-none outline-none bg-gray-800 text-white" />
            <input type="url" name="img" placeholder="paste url" className="p-3 rounded-md border-none outline-none bg-gray-800 text-white" />
            <input type="hidden" name="slug" placeholder="slug" value={userId} className="p-3 rounded-md border-none outline-none bg-gray-800 text-white" />
            {/* <input type="text" name="slug" placeholder="slug" className="p-3 rounded-md border-none outline-none bg-gray-800 text-white" /> */}
            <textarea name="description" cols="10" rows="10" placeholder="description" className="p-3 rounded-md border-none outline-none bg-gray-800 text-white" />
            <button className="bg-gray-400 text-black font-bold absolute bottom-0 left-0 right-0 p-2 hover:bg-gray-300 cursor-pointer">Add Blog</button>
            <p className=" text-red-500 font-semibold">{state?.error}</p>
        </form>
    );
}

export default AdminPostForm;

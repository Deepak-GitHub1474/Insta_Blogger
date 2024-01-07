import { addBlog, deleteBlog } from "@/lib/action";

const AddBlogPage = () => {
    return (
        <div className="min-h-[80vh] bg-gray-900 text-white flex flex-col items-center justify-center gap-4">
            <form action={addBlog} className="flex flex-col gap-2 md:w-[60vw] w-[95vw] bg-gray-700 pb-16 pt-8 px-2 rounded-lg shadow-[0_5px_5px_white] relative overflow-hidden">
                <input type="text" name="title" placeholder="title" className="p-3 rounded-md border-none outline-none bg-gray-800 text-white" />
                <input type="text" name="description" placeholder="description" className="p-3 rounded-md border-none outline-none bg-gray-800 text-white" />
                <input type="url" name="img" placeholder="url" className="p-3 rounded-md border-none outline-none bg-gray-800 text-white" />
                <input type="text" name="userId" placeholder="user id" className="p-3 rounded-md border-none outline-none bg-gray-800 text-white" />
                <input type="text" name="slug" placeholder="slug" className="p-3 rounded-md border-none outline-none bg-gray-800 text-white" />
                <button className="bg-gray-400 text-black font-bold absolute bottom-0 left-0 right-0 p-2 hover:bg-gray-300 cursor-pointer">Add Blog</button>
            </form>
            <form action={deleteBlog} className="flex flex-col gap-2 md:w-[60vw] w-[95vw] bg-gray-700 pb-16 pt-8 px-2 rounded-lg shadow-[0_5px_5px_white] relative overflow-hidden">
                <input type="text" name="blogId" placeholder="paste/enter blog id" className="p-3 rounded-md border-none outline-none bg-gray-800 text-white" />
                <button className="bg-gray-400 text-black font-bold absolute bottom-0 left-0 right-0 p-2 hover:bg-gray-300 cursor-pointer">Delete Blog</button>
            </form>
        </div>
    );
}

export default AddBlogPage;

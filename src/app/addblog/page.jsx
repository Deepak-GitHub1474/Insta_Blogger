import AddNewBlog from "@/components/UserPostForm/UserPostForm";
import { loggedUser } from "@/lib/data";

const AddBlog = async () => {

    const user = await loggedUser();
    
    return (
        <div className="min-h-[80vh] bg-gray-900 text-white flex flex-col items-center justify-center gap-4">
            <AddNewBlog userId = {user?._id}/>
        </div>
    );
}

export default AddBlog;

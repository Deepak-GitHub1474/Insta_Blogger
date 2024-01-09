import AdminPostForm from "@/components/AdminPostForm/AdminPostForm";
import AddNewBlog from "@/components/UserPostForm/UserPostForm";
import { auth } from "@/lib/auth";

const AddBlog = async () => {

    const session = await auth();
    
    return (
        <div className="min-h-[80vh] bg-gray-900 text-white flex flex-col items-center justify-center gap-4">
            <AddNewBlog userId = {session.user.id}/>
        </div>
    );
}

export default AddBlog;

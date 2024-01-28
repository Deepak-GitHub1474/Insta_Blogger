import AddNewBlog from "@/components/UserPostForm/UserPostForm";
import { loggedUser } from "@/lib/data";

const AddBlog = async () => {

    const user = await loggedUser();
    
    return (
        
        <AddNewBlog userId = {user?._id}/>
    );
}

export default AddBlog;

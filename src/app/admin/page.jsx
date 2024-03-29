import { loggedUser } from "@/lib/data";
import AdminPosts from "@/components/AdminPosts/AdminPosts";
import AdminPostForm from "@/components/AdminPostForm/AdminPostForm";
import AdminUsers from "@/components/AdminUsers/AdminUsers";
import AdminUserForm from "@/components/AdminUserForm/AdminUserForm";

const AdminPage = async () => {

const user = await loggedUser();

  return (
    <div className="min-h-[80vh] bg-gray-900 text-white flex lg:justify-around justify-center flex-wrap gap-12 p-4 pb-16">
       <div className="flex flex-col gap-12 flex-1">
            <div>
                <AdminPosts />
            </div>
            <div>
                <AdminUsers />
            </div>
        </div>

        <div className="flex flex-col items-center gap-12 flex-1">
            <div>
                <AdminPostForm userId={user?._id} />
            </div>
            <div>
                <AdminUserForm />
            </div>
        </div>
    </div>
  );
};

export default AdminPage;

import { Suspense } from "react";

import { auth } from "@/lib/auth";
import AdminPosts from "@/components/AdminPosts/AdminPosts";
import AdminPostForm from "@/components/AdminPostForm/AdminPostForm";
import AdminUsers from "@/components/AdminUsers/AdminUsers";
import AdminUserForm from "@/components/AdminUserForm/AdminUserForm";

const AdminPage = async () => {
  const session = await auth();

  return (
    <div className="min-h-[80vh] bg-gray-900 text-white flex md:justify-between justify-center flex-wrap gap-12 p-4 pb-16">
       <div className="flex flex-col gap-12">
            <div className="">
                <Suspense fallback={<div>Hold on loading...</div>}>
                    <AdminPosts />
                </Suspense>
            </div>
            <div className="">
                <Suspense fallback={<div>Hold on loading...</div>}>
                    <AdminUsers />
                </Suspense>
            </div>
        </div>

        <div className="flex flex-col gap-12">
            <div className="">
                <AdminPostForm userId={session.user.id} />
            </div>
            <div className="">
                <AdminUserForm />
            </div>
        </div>
    </div>
  );
};

export default AdminPage;

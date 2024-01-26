import PostCard from "@/components/PostCard/PostCard";
import { auth } from "@/lib/auth";
import { getComments, getPosts, getUsers } from "@/lib/data";

export const metadata = {
    title: "Blog Page",
    description: "About description",
};

const Blog = async () => {

    const posts = await getPosts();
    const users = await getUsers();
    const comments = await getComments();
    const session = await auth();

    return (
        <div className="min-h-[80vh] bg-gray-900">
            <PostCard 
                posts = {posts}
                users = {users}
                comments = {comments}
                session = {session}
            />
        </div>
    );
}

export default Blog;
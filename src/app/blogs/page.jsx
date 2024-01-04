import PostCard from "@/components/PostCard/PostCard";
import { getPosts, getUsers } from "@/components/lib/data";

export const metadata = {
    title: "Blog Page",
    description: "About description",
};

const Blog = async () => {

    const posts = await getPosts();
    const users = await getUsers();

    return (
        <div className="min-h-[80vh] bg-gray-900 text-white">
            <PostCard 
                posts = {posts}
                users = {users}
            />
        </div>
    );
}

export default Blog;
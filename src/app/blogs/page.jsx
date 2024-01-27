import PostCard from "@/components/PostCard/PostCard";
import { getComments, getPosts, getUsers, loggedUser } from "@/lib/data";

export const metadata = {
    title: "Blog Page",
    description: "About description",
};

const Blog = async () => {

    const posts = await getPosts();
    const users = await getUsers();
    const comments = await getComments();
    const user = await loggedUser();

    return (
        <div className="min-h-[80vh] bg-gray-900">
            <PostCard 
                posts = {posts}
                users = {users}
                comments = {comments}
                user = {user}
            />
        </div>
    );
}

export default Blog;
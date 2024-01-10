import UserUpdateBlog from "@/components/UserUpdateBlog/UserUpdateBlog";
import { getPost } from "@/lib/data";

const EditBlog = async ({params}) => {

  const {slug} = params;
  const post = await getPost(slug);

  return (
    <>
      <UserUpdateBlog post = {post}/>
    </>
  );
};

export default EditBlog;

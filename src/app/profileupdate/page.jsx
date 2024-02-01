import { loggedUser } from '@/lib/data';
import UpdateUserProfile from '@/components/UpdateUserProfile/UpdateUserProfile';

const Page = async () => {
    const user = await loggedUser();
    return (
        <UpdateUserProfile userId={user?._id}/>
    );
}

export default Page;

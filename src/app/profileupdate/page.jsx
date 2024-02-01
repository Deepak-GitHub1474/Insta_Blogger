import { loggedUser } from '@/lib/data';
import UpdateUserProfile from '@/components/UpdateUserProfile/UpdateUserProfile';

const Page = async () => {
    const user = await loggedUser();
    return (
        <UpdateUserProfile user={user}/>
    );
}

export default Page;

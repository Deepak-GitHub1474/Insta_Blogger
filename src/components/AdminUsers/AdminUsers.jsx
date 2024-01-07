import { getUsers } from "@/lib/data";
import { deleteUser } from "@/lib/action";
import Image from "next/image";
import { MdDelete } from "react-icons/md";

const AdminUsers = async () => {
    const users = await getUsers();

    return (
        <div className="flex flex-col gap-2 items-center lg:w-full w-[95vw]">
            <div className="flex items-center justify-center gap-2 w-full">
                <div className="border-t-[0.5px] mt-2 p-1 flex-1 opacity-15 "></div>
                <div className="text-blue-500 font-semibold text-xl">Users</div>
                <div className="border-t-[0.5px] mt-2 p-1 flex-1 opacity-15"></div>
            </div>
            <div className="flex items-center gap-5 overflow-x-auto overflow-y-hidden max-w-full p-2">
                {users.map(user => (
                    <div key={user._id} className=" flex flex-col items-center justify-center">
                        <div className="w-16 h-16 relative rounded-full overflow-hidden border-2 border-blue-700 hover:scale-[1.1] transition-all">
                            <Image src={user.img ? user.img : "/avatar.png"} fill alt="Author-Image" className="object-cover"/>
                        </div>
                        <p className="text-[12px] max-w-16 overflow-hidden whitespace-nowrap text-ellipsis">{user?.username}</p>
                        <form action={deleteUser}>
                            <input type="hidden" name="id" value={user.id} />
                            <button className="text-red-500 hover:text-red-700"><MdDelete size={24} /></button>
                        </form>
                    </div>
                ))}
            </div>
            <div className="border-t-[0.5px] mt-2 p-1 opacity-15 w-full"></div>
        </div>
    );
}

export default AdminUsers;

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { getPosts, getUsers } from "@/lib/data";

 const AdminSkeleton = async () => {

    const posts = await getPosts();
    const users = await getUsers();

    return(
        <div className="bg-gray-900 min-h-[80vh] flex flex-col items-center justify-center gap-8 p-4">

            <div className="flex items-center gap-10 overflow-x-auto max-w-full p-2">
                {Array.from({ length: posts.length }).map((_, index) => (
                    <div key={index} className="w-40 h-42 rounded-[0.5rem] p-2 bg-[#b0b0b0] shadow-[0_0_5px_#b0b0b0] border-[1px] border-[#b0b0b0] animate-pulse hover:scale-[1.05] transition-all duration-300 hover:shadow-[0_0_10px_#0000ff]">
                        <div className="flex flex-col items-center justify-center gap-1">
                            <div className="w-[60px] h-[60px] bg-white shadow-[0_0_15px_#0000ff] rounded-full">
                                <Skeleton width={0} height={0} />
                            </div>
                            <Skeleton width={147} height={20} />
                            <Skeleton width={147} height={12} />
                            <div className="w-6 h-6 bg-white shadow-[0_0_15px_#0000ff] rounded-full">
                                <Skeleton width={0} height={0} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center gap-[1.5rem] overflow-x-auto max-w-full p-2">
                    {Array.from({ length: users.length }).map((_, index) => (
                        <div className="w-[100px] h-[130px] rounded-[0.5rem] p-[0.5rem] animate-pulse duration-200" key={index}>
                            <div className="flex items-center justify-center flex-col">
                                <div className="w-[60px] h-[60px] bg-white shadow-[0_0_15px_#0000ff] rounded-full">
                                    <Skeleton width={0} height={0} />
                                </div>
                                <Skeleton width={60} height={10} />
                                <div className="w-6 h-6 bg-white shadow-[0_0_15px_#0000ff] rounded-full">
                                    <Skeleton width={0} height={0} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
    );
}

export default AdminSkeleton;

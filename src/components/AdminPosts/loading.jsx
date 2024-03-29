import { getPosts } from "@/lib/data";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AdminPostsSkeleton = async () => {

  const posts = await getPosts();

  return(
    <div className="flex items-center justify-center gap-10 overflow-x-auto max-w-full p-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
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
  );
};

export default AdminPostsSkeleton;

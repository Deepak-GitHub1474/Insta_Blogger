import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { getUsers } from "@/lib/data";

 const AdminUsersSkeleton = async () => {

    const users = await getUsers();

    return(
      <div className="bg-gray-900 min-h-[80vh] flex items-center gap-[1.5rem] overflow-x-auto max-w-full p-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
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
    );
}

export default AdminUsersSkeleton;

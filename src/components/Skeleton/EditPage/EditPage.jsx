import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const EditPageSkeleton = async () => {

  return(
    <div className="bg-gray-900 min-h-[80vh] flex items-center justify-center flex-col gap-8 p-4">
        <div className="flex flex-col items-center justify-center gap-1 animate-pulse">
            <div className="w-[120px] h-[120px] bg-white shadow-[0_0_15px_#0000ff] rounded-full">
                <Skeleton width={0} height={0} />
            </div>
            <Skeleton width={147} height={20} />
            <div className="flex flex-wrap gap-2 max-w-[500px] w-[95vw]">
                <Skeleton width={100} height={8} />
                <Skeleton width={60} height={8} />
                <Skeleton width={40} height={8} />
                <Skeleton width={60} height={8} />
                <Skeleton width={125} height={8} />
                <Skeleton width={80} height={8} />
                <Skeleton width={100} height={8} />
                <Skeleton width={60} height={8} />
                <Skeleton width={85} height={8} />
                <Skeleton width={60} height={8} />
                <Skeleton width={125} height={8} />
                <Skeleton width={40} height={8} />
                <Skeleton width={100} height={8} />
                <Skeleton width={60} height={8} />
                <Skeleton width={60} height={8} />
                <Skeleton width={60} height={8} />
                <Skeleton width={125} height={8} />
                <Skeleton width={40} height={8} />
            </div>
        </div>

        <div className="skeleton-card max-w-[500px] w-[90vw] h-[500px] bg-[#b0b0b0] shadow-[0_0_10px_#0000ff] rounded-[0.5rem] p-4 flex flex-col gap-2 relative overflow-hidden animate-pulse duration-150">
            <div className="mx-auto">
                <Skeleton height={36} width={300}/>
            </div>
            <Skeleton height={36} />
            <Skeleton height={36} />
            <Skeleton height={36} />
            <Skeleton height={250} />
            <div className=" absolute bottom-0 left-0 right-0">
                <Skeleton height={25} />
            </div>
        </div>
    </div>
  );
};

export default EditPageSkeleton;

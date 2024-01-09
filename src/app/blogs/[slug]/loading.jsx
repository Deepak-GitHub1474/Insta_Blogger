import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./skeleton.css";

const SinglePostsSkeleton = async () => {

  return(
    <div className="bg-gray-900 min-h-[80vh] flex items-center justify-center flex-col">
        <div className="flex flex-col items-center justify-center gap-1 animate-pulse">
            <div className="w-[120px] h-[120px] bg-white shadow-[0_0_15px_#0000ff] rounded-full">
                <Skeleton width={0} height={0} />
            </div>
            <Skeleton width={147} height={20} />
            <Skeleton width={147} height={12} />
        </div>

        <div className="skeleton-container">
        <div className="skeleton-card">
            <div className="name-edit-delete-container">
                <div className="user-container">
                    <Skeleton width={150} height={25} />
                    <Skeleton width={8} height={8} />
                </div>
                <Skeleton width={40} height={8} />
            </div>
            <div className="skeleton-card-cover">
                <Skeleton width={250} height={160} />
            </div>
            <div className="skeleton-card-title">
                <Skeleton height={25} />
            </div>
            <div className="skeleton-card-description">
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
                <Skeleton width={100} height={8} />
                <Skeleton width={60} height={8} />
            </div>
            <div className="skeleton-icons-container">
                <div className="skeleton-like-comment-share-container">
                    <Skeleton width={40} height={30} />
                    <Skeleton width={40} height={30} />
                    <Skeleton width={40} height={30} />
                </div>
                <Skeleton width={40} height={30} className="save-icon"/>
            </div>
            <div className="skeleton-read-btn">
                <Skeleton height={25} />
            </div>
        </div>
    </div>
    </div>
  );
};

export default SinglePostsSkeleton;

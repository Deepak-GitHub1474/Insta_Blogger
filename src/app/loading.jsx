// Custom loading page

const Loading = () => {
    return (
        <div className="min-h-[80vh] bg-gray-900 text-white flex items-center justify-center flex-col">
            {/* <h3>Loading...</h3> */}
            <img src="https://res.cloudinary.com/dlt4ash36/image/upload/v1703921206/34338d26023e5515f6cc8969aa027bca_n0838w.gif" alt="" className="w-20"/>
        </div>
    );
}

export default Loading;

import Image from "next/image";

const LandingPage = () => {
  return (
    <main className="bg-gray-900 min-h-[80vh] sm:px-20 p-4 pb-20">
        <section className="flex items-center justify-center lg:flex-row flex-col lg:gap-16 gap-8">
            <div className="flex flex-1 flex-col gap-8">
                <h1 className="sm:text-4xl text-2xl font-bold text-blue-600 max-w-[32rem]">
                Welcome to your professional community blog...
                </h1>
                <p className="sm:text-lg text-base text-[#dddcdc] font-thin">
                    Introducing innovative social media InstaBlogger, a dynamic platform designed for sharing thoughts, stories, and experiences. With a sleek interface, users can create interactive long-form blogs. Experience seamless interactions through features like commenting, liking, creating, updating, and deleting posts. InstaBlogger also prioritizes security with an authorized admin panel, ensuring a safe and enjoyable user experience. Join us on this journey of expression and connection in the world of social media.
                </p>
            </div>
        <div className="xl:w-[28rem] xl:h-[25rem] w-80 h-80 relative rounded-full rounded-tl-[70%] rounded-tr-[70%] rounded-br-[70%] rounded-bl-[30%] overflow-hidden shadow-[0_10px_10px_#0000ff]">
            <Image src="https://res.cloudinary.com/dlt4ash36/image/upload/v1706968075/social_network__3__as5ewn.gif" alt="" fill />
        </div>
        </section>

        <section className="flex flex-col gap-8 mt-8">
            <div className=" flex flex-col items-center sm:items-start text-blue-600">
                <h1 className="sm:text-4xl text-2xl font-bold">Explore Amazing Features</h1>
                <p className="sm:text-lg text-base text-[#dddcdc] font-thin text-center">
                A one-stop destination for social media activity or blogging...
                </p>
            </div>
            <div className="flex items-center justify-center gap-8 flex-wrap">
                <div className="flex flex-col gap-8">
                    
                    <div className="md:w-[460px] xl:w-[250px] 2xl:w-[350px] p-4 rounded-lg bg-[#c8f5d2] hover:bg-[#bffccd] shadow-[0_5px_10px_#0000ff] hover:shadow-[0_10px_10px_#0000ff]">
                        <Image width={52} height={52} src="https://res.cloudinary.com/dlt4ash36/image/upload/v1706968586/create_herxqt.png" alt="products-icon1" />
                        <h1 className="font-bold text-xl my-4">InstaBlogger Creation</h1>
                        <h2 className="text-lg font-extralight text-[#000]">Elevate your voice share your thoughts, stories, and ideas effortlessly. </h2>
                    </div>

                    <div className="md:w-[460px] xl:w-[250px] 2xl:w-[350px] p-4 rounded-lg bg-[#f7bdef] hover:bg-[#f8a3ed] shadow-[0_5px_10px_#0000ff] hover:shadow-[0_10px_10px_#0000ff]"
                        >
                        <Image width={52} height={52} src="https://res.cloudinary.com/dlt4ash36/image/upload/v1706968587/update_aeqp8y.png" alt="products-icon1" />
                        <h1 className="font-bold text-xl py-4">InstaBlogger Updation</h1>
                        <h2 className="text-lg font-extralight text-[#000]">Experience the freedom to seamlessly edit your posts with updation feature.</h2>
                    </div>
                    
                    <div className="md:w-[460px] xl:w-[250px] 2xl:w-[350px] p-4 rounded-lg bg-[#f79393] hover:bg-[#fd7777] shadow-[0_5px_10px_#0000ff] hover:shadow-[0_10px_10px_#0000ff]"
                        >
                        <Image width={52} height={52} src="https://res.cloudinary.com/dlt4ash36/image/upload/v1706968586/delete_fq57zq.png" alt="products-icon1" />
                        <h1 className="font-bold text-xl py-4">InstaBlogger Deletion</h1>
                        <h2 className="text-lg font-extralight text-[#000]">Experience the freedom to seamlessly delete your posts with deletion feature.</h2>
                    </div>
                </div>

                <div className="flex flex-col gap-8">
                    
                    <div className="md:w-[460px] xl:w-[250px] 2xl:w-[350px] p-4 rounded-lg bg-[#f3f3ba] hover:bg-[#fbfba7] shadow-[0_5px_10px_#0000ff] hover:shadow-[0_10px_10px_#0000ff]"
                        >

                        <Image width={52} height={52} src="https://res.cloudinary.com/dlt4ash36/image/upload/v1706968586/like_eywcwp.png" alt="products-icon1" />
                        <h1 className="font-bold text-xl py-4">InstaBlogger Like & Unlike </h1>
                        <h2 className="text-lg font-extralight text-[#000]">Express your appreciation by liking the blogs or also unlike anytime.</h2>
                    </div>
                    
                    <div className="md:w-[460px] xl:w-[250px] 2xl:w-[350px] p-4 rounded-lg bg-[#88ddde] hover:bg-[#5af5f2] shadow-[0_5px_10px_#0000ff] hover:shadow-[0_10px_10px_#0000ff]"
                    >
                        <Image width={52} height={52} src="https://res.cloudinary.com/dlt4ash36/image/upload/v1706968585/comment_c8tnca.png" alt="products-icon1" />
                        <h1 className="font-bold text-xl py-4">InstaBlogger Comment</h1>
                        <h2 className="text-lg font-extralight text-[#000]">Express your views on blogs by commenting your thoughts.</h2>
                    </div>
                </div>

                <div className="max-w-[550px] shadow-[0_5px_10px_#0000ff] hover:shadow-[0_10px_10px_#0000ff]">
                    <img src="/album.png" alt="programming-gif" />
                </div>
            </div>
        </section>
    </main>
  );
};

export default LandingPage;

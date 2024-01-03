import Image from "next/image";

export const metadata = {
    title: "About Page",
    description: "About description",
};

const About = () => {
    return (
        <div className="min-h-[80vh] flex items-center xl:flex-row flex-col justify-center gap-8 bg-gray-900 text-white p-4">
            <div className="flex flex-1 flex-col gap-8 sm:px-20">
                <h2 className="text-blue-600 font-bold text-xl">About Agency</h2>
                <h1 className="sm:text-4xl text-2xl font-semibold">
                    We create digital ideas that are bigger, bolder, braver and better.
                </h1>
                <p className="sm:text-lg text-base text-[#dddcdc] font-thin">
                We create digital ideas that are bigger, bolder, braver and better. We
                believe in good ideas flexibility and precission We're world's Our
                Special Team best consulting & finance solution provider. Wide range
                of web and software development services.
                </p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center flex-col gap-1">
                        <h1 className="text-blue-600 font-bold text-xl">10 K+</h1>
                        <p>Year of experience</p>
                    </div>
                    <div className="flex items-center flex-col gap-1">
                        <h1 className="text-blue-600 font-bold text-xl">10 K+</h1>
                        <p>Year of experience</p>
                    </div>
                    <div className="flex items-center flex-col gap-1">
                        <h1 className="text-blue-600 font-bold text-xl">10 K+</h1>
                        <p>Year of experience</p>
                    </div>
                </div>
            </div>
            
            <div className="sm:w-[28rem] sm:h-[25rem] w-80 h-80 relative mx-20">
                <Image 
                    src="https://res.cloudinary.com/dlt4ash36/image/upload/v1703940151/about_wxqhuc.png"
                    alt="About Image"
                    fill
                />
            </div>
        </div>
    );
}

export default About;

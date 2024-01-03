import Image from "next/image";

const Home = () => {
  
  return (
    <main className="min-h-[80vh] flex items-center justify-center lg:flex-row flex-col gap-8 bg-gray-900 text-white p-4">
      <div className="flex flex-1 flex-col gap-8 sm:px-20">
          <h1 className="sm:text-4xl text-2xl font-semibold">Creative Thoughts Agency</h1>
          <p className="sm:text-lg text-base text-[#dddcdc] font-thin">
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We're world's Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
          </p>
          <div className="flex items-center gap-6">
            <button className="bg-white text-[#0000ff] w-28 py-[5px] rounded-3xl font-bold">Learn More</button>
            <button className="bg-yellow-300 text-[#000000] w-28 py-[5px] rounded-3xl font-bold">Contact</button>
          </div>
          <div className="w-[380px] h-14 relative">
            <Image src="/brands.png" alt="" fill className="grayscale" />
          </div>
      </div>
      <div className="sm:w-[28rem] sm:h-[25rem] w-80 h-80 relative mx-20 rounded-3xl overflow-hidden">
        <Image src="/hero.gif" alt="" fill className=""/>
      </div>
    </main>
  );
};

export default Home;

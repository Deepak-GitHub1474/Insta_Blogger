import Image from "next/image";
import Link from "next/link";

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1b2124] min-h-[10vh] text-gray-400 p-4">

        <div className="flex items-center justify-center xl:items-baseline xl:flex-row flex-col sm:gap-10 gap-5">

            <div className="flex items-center justify-center mr-10">
                <Image width={250} height={250} src="/logo.png" alt="pw-logo" />
            </div>

            <div className="flex flex-col gap-5 pb-5">
                <div className="flex flex-col gap-3">
                    <h1 className="text-[#ffffff] font-semibold text-xl">Contact</h1>
                    <div className="border-[#0000ff] border-[2.4px] rounded-lg w-[16rem]"></div>
                </div>
                <div className="flex flex-col gap-5">
                    <p>support@instablogger.com</p>
                    <p>+91-7666122288</p>
                </div>
            </div>

            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                    <h1 className="text-[#ffffff] font-semibold text-xl">Company</h1>
                    <div className="border-[#0000ff] border-[2.4px] rounded-lg w-[16rem]"></div>
                </div>
                <div className="flex justify-between">
                    <ul className="flex flex-col gap-2 mb-2">
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                    <ul className="flex flex-col gap-2">
                        <li>
                            <Link href="/">Terms and condition</Link>
                        </li>
                        <li>
                            <Link href="/">Privacy policy</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="text-center text-white">
                InstaBlogger || © All rights reserved || {year}
            </div>
        </div>
    </footer>
  );
};

export default Footer;

"use client";

import { useState, useEffect } from 'react';
import { handleLogout } from "@/lib/action";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header({session}) {

    const [isNavVisible, setIsNavVisible] = useState(false);
    const pathName = usePathname();

    const headerClassName = isNavVisible ? "w-full h-[65vh] transition-all duration-300" : "w-full h-[10vh] transition-all duration-300";

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth >= 1024) {
                setIsNavVisible(false);
            }
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <nav className={`bg-slate-700 text-white ${headerClassName}`}>
            
            <div className=" absolute top-2 left-5 cursor-pointer" >
                <Link href="/">
                    <h1 className='text-3xl text-blue-600 font-bold font-serif'>InstaBlogger</h1>
                    <p className='font-extralight ml-[2.2rem] text-sm opacity-60'>...from blog to social media</p>
                </Link>
            </div>

            <div className={`${isNavVisible ? "absolute left-5 top-[5rem] right-7" : "absolute top-3 right-7 lg:block hidden"}`}>
                <ul className={`${isNavVisible ? "flex flex-col gap-3 text-lg" : "flex items-center justify-center gap-3 text-lg"}`}>
                    <Link href="/">
                        <li className={`py-[6px] px-3 ${pathName==="/" ? "bg-gray-900 hover:bg-gray-600" : "hover:bg-gray-600"}`}>Home</li>
                    </Link>
                    <Link href="/about">
                        <li className={`py-[6px] px-3 ${pathName==="/about" ? "bg-gray-900 hover:bg-gray-600" : "hover:bg-gray-600"}`}>About</li>
                    </Link>
                    <Link href="/contact">
                        <li className={`py-[6px] px-3 ${pathName==="/contact" ? "bg-gray-900 hover:bg-gray-600" : "hover:bg-gray-600"}`}>Contact</li>
                    </Link>
                    <Link href="/blogs" >
                        <li className={`py-[6px] px-3 ${pathName==="/blogs" ? "bg-gray-900" : "hover:bg-gray-600"}`}>Blogs</li>
                    </Link>
                    <Link href="/addblog" >
                        <li className={`py-[6px] px-3 ${pathName==="/addblog" ? "bg-gray-900" : "hover:bg-gray-600"}`}>Add Blog</li>
                    </Link>
                    {session?.user ?
                        <div  className={`${isNavVisible ? " flex flex-col gap-3 text-lg" : "flex items-center justify-center gap-8 text-lg"}`}>
                            {session.user?.isAdmin &&  
                            <Link href="/admin">
                                <button className="bg-blue-800 w-full hover:hover:bg-blue-600 py-[6px] px-3">Admin</button>
                            </Link>
                            }
                            <form action={handleLogout}>
                                <button className="bg-gray-900 w-full hover:hover:bg-gray-600 py-[6px] px-3">Logout</button>
                            </form>
                        </div> :
                        <Link href="/auth/login">
                            <button className="bg-gray-900 w-full hover:hover:bg-gray-600 py-[6px] px-3 text-center">Login</button>
                        </Link>
                    }
                </ul>
            </div>
            <div onClick={() => setIsNavVisible(!isNavVisible)} 
                className="absolute right-7 top-[0.8rem] border border-gray-300 p-1 px-3 rounded-[4px] lg:hidden block cursor-pointer">
                <div className="bg-[url('https://res.cloudinary.com/dlt4ash36/image/upload/v1704828601/menu_zntl6s.png')] bg-cover bg-center w-8 h-8"></div>
            </div>
        </nav>
    );
}

export default Header;
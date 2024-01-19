"use client";

import { useState, useEffect } from 'react';
import { handleLogout } from "@/lib/action";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {FaCaretDown, FaCaretUp } from "react-icons/fa";

function Header({session}) {

    const [isNavVisible, setIsNavVisible] = useState(false);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const pathName = usePathname();

    // Handle Navbar Size
    const headerClassName = isNavVisible ? "w-full min-h-[100vh] transition-all duration-300 absolute z-50" : 
                                           "w-full h-[10vh] transition-all duration-300 relative";
    // Track window with
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

    // Dropdoewn
    const toggleDropdown = () => {
        setIsDropdownVisible(prevState => !prevState);
    };

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
                    <Link href="/profile" className="lg:hidden flex relative group max-w-fit">
                        <div className={`w-16 h-16 rounded-full overflow-hidden hover:scale-[1.1] transition-all hover:border-2 border-blue-700 ${pathName==="/profile" && "border-2 border-gray-900 hover:border-blue-700"}`}>
                            {session?.user?.img &&<img
                                src={!session?.user?.img ? "https://res.cloudinary.com/dlt4ash36/image/upload/v1700893730/User-Avatar-Profile-Download-PNG-Isolated-Image_mrgemq.png": session?.user?.img}
                                alt="dp" className="w-full h-full object-cover" 
                            />}
                            {session?.user?.image &&<img
                                src={!session?.user?.image ? "https://res.cloudinary.com/dlt4ash36/image/upload/v1700893730/User-Avatar-Profile-Download-PNG-Isolated-Image_mrgemq.png": session?.user?.image}
                                alt="dp" className="w-full h-full object-cover" 
                            />}
                        </div>
                        <p className="text-base ml-[5px] absolute left-14 top-0 z-50 bg-gray-900 max-w-60 py-[2px] px-4 overflow-hidden whitespace-nowrap text-ellipsis opacity-0 group-hover:opacity-100 transition-opacity">
                            {session?.user?.username && session?.user?.username.charAt(0).toUpperCase() + session?.user.username.slice(1)}
                            {session?.user?.name && session?.user?.name.charAt(0).toUpperCase() + session?.user.name.slice(1)}
                        </p>
                    </Link>
                    <Link href="/">
                        <li className={`py-[6px] px-3 ${pathName==="/" ? "bg-gray-900 hover:bg-gray-600" : "hover:bg-gray-600"}`}>Home</li>
                    </Link>
                    <Link href="/about">
                        <li className={`py-[6px] px-3 ${pathName==="/about" ? "bg-gray-900 hover:bg-gray-600" : "hover:bg-gray-600"}`}>About</li>
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
                            <div className="hidden lg:flex">
                                <div className="bg-gray-900 h-9 max-w-fit pr-2 flex items-center gap-[6px] cursor-pointer rounded-[40px] relative" onClick={toggleDropdown}>
                                    <div className="w-9 h-9 rounded-full overflow-hidden">
                                        <img
                                            src={!session?.user?.img ? "https://res.cloudinary.com/dlt4ash36/image/upload/v1700893730/User-Avatar-Profile-Download-PNG-Isolated-Image_mrgemq.png": session?.user?.img}
                                            alt="dp" className="w-full h-full object-cover" />
                                    </div>
                                    <p className="text-base ml-[5px] max-w-20  overflow-hidden whitespace-nowrap text-ellipsis">
                                        {session?.user?.username && session?.user?.username.charAt(0).toUpperCase() + session?.user.username.slice(1)}
                                        {session?.user?.name && session?.user?.name.charAt(0).toUpperCase() + session?.user.name.slice(1)}
                                    </p>
                                    {isDropdownVisible ? <FaCaretUp size="22" /> : <FaCaretDown size="22" />}
                                    {isDropdownVisible &&
                                        <ul className="w-[120px] bg-gray-400 text-black rounded-md absolute top-8 z-50 overflow-hidden">
                                            <Link href="/profile">
                                              <li className="text-sm font-semibold p-[5px] hover:bg-gray-300 w-[98%] rounded-md cursor-pointer">Profile</li>
                                            </Link>
                                            <div className="w-[98%] border-t-[0.5px] border-stone-500"></div>
                                        </ul>
                                    }
                                </div>
                            </div>
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
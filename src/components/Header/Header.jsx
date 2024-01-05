"use client";
import { handleLogout } from "@/lib/action";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = ({session}) => {

    const pathName = usePathname();
    
    return (
        <nav className=" bg-gray-700 text-white h-[10vh] flex items-center justify-around p-2">
            <div className="w-12 rounded-full overflow-hidden cursor-pointer mr-1" >
                <Link href="/">
                    <img src="https://res.cloudinary.com/dlt4ash36/image/upload/v1702147789/favicon_xtzfvl.png" alt="nav-logo" />
                </Link>
            </div>
            <ul className="flex items-center justify-center sm:gap-5 gap-1">
                <Link href="/about">
                    <li className={`hover:hover:bg-gray-600 py-1 w-[4.5rem] text-center text-[1rem] rounded-2xl ${pathName === "/about" && "bg-gray-900"}`}>About</li>
                </Link>
                <Link href="/contact">
                    <li className={`hover:hover:bg-gray-600 py-1 w-[4.5rem] text-center text-[1rem] rounded-2xl ${pathName === "/contact" && "bg-gray-900"}`}>Contact</li>
                </Link>
                <Link href="/blogs">
                    <li className={`hover:hover:bg-gray-600 py-1 w-[4.5rem] text-center text-[1rem] rounded-2xl ${pathName === "/blogs" && "bg-gray-900"}`}>Blog</li>
                </Link>
            </ul>
  
            {session?.user ?
                <div className="flex gap-2">
                    {session.user?.isAdmin &&  <button className="bg-blue-800 hover:hover:bg-blue-600 py-1 w-[4.5rem] text-center text-[1rem] rounded-2xl">Admin</button>}
                    <form action={handleLogout}>
                        <button className="bg-gray-900 hover:hover:bg-gray-600 py-1 w-[4.5rem] text-center text-[1rem] rounded-2xl">Logout</button>
                    </form>
                </div> :
                <Link href="/auth/login">
                    <button className="bg-gray-900 hover:hover:bg-gray-600 py-1 w-[4.5rem] text-center text-[1rem] rounded-2xl">Login</button>
                </Link>
            }
        </nav>
    );
}

export default Header;

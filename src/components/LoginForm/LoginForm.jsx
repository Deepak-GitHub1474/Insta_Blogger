"use client";

import { handleGithubLogin, login } from "@/lib/action";
import Link from "next/link";
import Image from "next/image";
import { useFormState } from "react-dom";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const LoginForm = ({session}) => {

    const [state, formAction] = useFormState(login, undefined);
    const [isLogin, setIsLogin] = useState(false);
    const [isGitLogin, setIsGitLogin] = useState(false);

    function isLogging() {
        if (session) {
            setIsLogin(prevIsLogin => !prevIsLogin);
        } 
    }

    function isGitLogging() {
        setIsGitLogin(prevIsLogin => !prevIsLogin);
    }

    return (
        <div className="flex flex-col gap-6 sm:w-[500px] w-[95vw] bg-gray-700 pb-10 pt-8 px-2 rounded-lg shadow-[0_5px_5px_white] relative overflow-hidden">
            <form action={formAction} className="flex flex-col gap-4">
                <h1 className="text-center font-bold text-3xl text-gray-400 mb-4">Login Form</h1>
                <input type="email" name="email" placeholder="email" className="p-3 rounded-md border-none outline-none bg-gray-800 text-white" />
                <input type="password" name="password" placeholder="password" className="p-3 rounded-md border-none outline-none bg-gray-800 text-white" />
                <button onClick={isLogging} className="bg-gray-400 text-black font-bold rounded-md p-2 hover:bg-gray-300 cursor-pointer flex items-center justify-center">
                    {isLogin ? "LogIn..." : "LogIn"}
                    {isLogin && <AiOutlineLoading3Quarters className="ml-2 w-4 h-4 mt-1 animate-spin" />}
                </button>
                <div className="flex items-center justify-center gap-2 mt-2">
                    <span>{"Don't have account?"}</span>
                    <Link href="/auth/register" className="font-semibold underline hover:text-blue-400">SignUp</Link>
                </div>
                <p className=" text-red-500 font-semibold">{state?.error}</p>
            </form>

            <div className="flex items-center justify-center gap-2">
                <div className="border-t-[0.5px] mt-2 p-1 flex-1 opacity-50"></div>
                <div className="">OR</div>
                <div className="border-t-[0.5px] mt-2 p-1 flex-1 opacity-50"></div>
            </div>

            <form action={handleGithubLogin}>
                <button onClick={isGitLogging} className="bg-blue-800 text-white font-bold p-2 hover:bg-blue-600 cursor-pointer absolute left-0 right-0 bottom-0">
                    {isGitLogin ? 
                        <span className="flex items-center justify-center">
                            Login... <AiOutlineLoading3Quarters className="ml-20 w-4 h-4 animate-spin absolute bottom-3" />
                        </span> : "Github Login "
                    }

                    {!isGitLogin &&                       
                    <Image 
                        src="/github.png"
                        alt="github-logo"
                        fill
                        className="absolute translate-x-[5rem] object-contain"
                    />}
                </button>
            </form>
        </div>
    );
}

export default LoginForm;

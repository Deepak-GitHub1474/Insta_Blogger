"use client";

import { handleGithubLogin, handleGoogleLogin, login } from "@/lib/action";
import Link from "next/link";
import { useFormState } from "react-dom";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";

const LoginForm = () => {

    const [state, formAction] = useFormState(login, undefined);
    const [loading, setLoading] = useState(null);

    return (
        <div className="min-h-[80vh] bg-gray-900 text-white flex items-center justify-center p-2 ">
            <div className="flex flex-col gap-6 sm:w-[500px] w-[95vw] pt-8 px-2 rounded-lg shadow-[0_5px_5px_white]  relative overflow-hidden">
                <h1 className="text-center font-bold text-[1.6rem] text-gray-400 absolute top-0 left-0 right-0">Login Form</h1>

                <form action={handleGithubLogin} className="flex flex-col mt-8">
                    <button onClick={() => setLoading("github")} className="bg-blue-800 text-white font-bold p-2 hover:bg-blue-600 cursor-pointer">
                        {loading === "github" ? 
                            <span className="flex items-center justify-center gap-2 relative">
                            <FaGithub size={24}/> Login... <AiOutlineLoading3Quarters className="w-4 h-4 animate-spin" />
                            </span> 
                            :
                            <span className="flex items-center justify-center gap-2">
                                Github Login  <FaGithub size={24}/>
                            </span>
                        }
                    </button>
                </form>

                <form action={handleGoogleLogin} className="flex flex-col">
                    <button onClick={() => setLoading("google")} className="bg-blue-800 text-white font-bold p-2 hover:bg-blue-600 cursor-pointer ">
                        {loading === "google" ? 
                            <span className="flex items-center justify-center gap-2 relative">
                                <FcGoogle size={24}/> Login... <AiOutlineLoading3Quarters className="w-4 h-4 animate-spin" />
                            </span> 
                            :
                            <span className="flex items-center justify-center gap-2">
                                Google Login <FcGoogle size={24}/>
                            </span>
                        }
                        
                    </button>
                </form>
                
                <div className="flex items-center justify-center gap-2">
                    <div className="border-t-[0.5px] mt-2 p-1 flex-1 opacity-50"></div>
                    <div className="">OR</div>
                    <div className="border-t-[0.5px] mt-2 p-1 flex-1 opacity-50"></div>
                </div>

                <form action={formAction} className="flex flex-col gap-4">
                    <input type="email" name="email" placeholder="email" className="p-3 rounded-md border-none outline-none bg-gray-800 text-white" />
                    <input type="password" name="password" placeholder="password" className="p-3 rounded-md border-none outline-none bg-gray-800 text-white" />
                    <button onClick={() => setLoading("credential_login")} className="bg-gray-400 text-black font-bold rounded-md p-2 hover:bg-gray-300 cursor-pointer flex items-center justify-center">
                        {loading === "credential_login" && state?.error !== "Invalid username or password" ? "LogIn..." : "LogIn"}
                        {loading === "credential_login" && state?.error !== "Invalid username or password" && <AiOutlineLoading3Quarters className="ml-2 w-4 h-4 mt-1 animate-spin" />}
                    </button>
                    <div className="flex items-center justify-center gap-2 mt-2">
                        <span>{"Don't have account?"}</span>
                        <Link href="/auth/register" className="font-semibold underline hover:text-blue-400">SignUp</Link>
                    </div>
                    <p className=" text-red-500 font-semibold">{state?.error}</p>
                </form>
            </div>
        </div>
        
    );
}

export default LoginForm;

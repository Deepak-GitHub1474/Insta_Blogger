"use client";

import { signup } from "@/lib/action";
import Link from "next/link";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import {toast} from "react-hot-toast";

const SignupForm = () => {

    const [state, formAction] = useFormState(signup, undefined);

    const router = useRouter();

    useEffect(() => {
        state?.success && router.push("/auth/login");
        state?.success && toast.success("Signup Successfully");
    }, [state?.success, router]);

    return (
        <form action={formAction} className="flex flex-col gap-4 md:w-[60vw] w-[95vw] bg-gray-700 pb-16 pt-8 px-2 rounded-lg shadow-[0_5px_5px_white] relative overflow-hidden">
            <h1 className="text-center font-bold text-3xl text-gray-400 mb-4">Signup Form</h1>
            <input type="text" name="username" placeholder="username" className="p-3 rounded-md border-none outline-none bg-gray-800 text-white" />
            <input type="email" name="email" placeholder="email" className="p-3 rounded-md border-none outline-none bg-gray-800 text-white" />
            <input type="password" name="password" placeholder="password" className="p-3 rounded-md border-none outline-none bg-gray-800 text-white" />
            <input type="password" name="confirmPassword" placeholder="confirm password" className="p-3 rounded-md border-none outline-none bg-gray-800 text-white" />
            <button className="bg-gray-400 text-black font-bold p-2 hover:bg-gray-300 cursor-pointer absolute left-0 right-0 bottom-0">
                {state?.success ? 
                    <span className="flex items-center justify-center">
                        Signing... <AiOutlineLoading3Quarters className="ml-24 w-4 h-4 animate-spin absolute bottom-3" />
                    </span> : 
                    <span className="flex items-center justify-center">
                        Signup 
                        <video className="rounded-full absolute ml-24" width="30" height="30" preload="none" autoplay="autoplay" loop="true" muted="muted" playsinline="">
                            <source src="https://cdn-icons-mp4.flaticon.com/512/10828/10828133.mp4" type="video/mp4" />
                        </video>
                    </span>
                }
            </button>
            <p className=" text-red-500 font-semibold">{state?.error}</p>
            <div className="flex items-center justify-center gap-2 mt-2">
                <span>Have an account?</span>
                <Link href="/auth/login" className="font-semibold underline hover:text-blue-400">Login</Link>
            </div>
        </form>
    );
}

export default SignupForm;

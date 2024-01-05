"use client";

import { signup } from "@/lib/action";
import Link from "next/link";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const RegisterForm = () => {

    const [state, formAction] = useFormState(signup, undefined);

    const router = useRouter();

    useEffect(() => {
        state?.success && router.push("/auth/login");
    }, [state?.success, router]);

    return (
        <form action={formAction} className="flex flex-col gap-4 md:w-[60vw] w-[95vw] bg-gray-700 pb-16 pt-8 px-2 rounded-lg shadow-[0_5px_5px_white] relative overflow-hidden">
            <h1 className="text-center font-bold text-3xl text-gray-400 mb-4">Register Form</h1>
            <input type="text" name="username" placeholder="username" className="p-3 rounded-md border-none outline-none bg-gray-800 text-white" />
            <input type="email" name="email" placeholder="email" className="p-3 rounded-md border-none outline-none bg-gray-800 text-white" />
            <input type="password" name="password" placeholder="password" className="p-3 rounded-md border-none outline-none bg-gray-800 text-white" />
            <input type="password" name="confirmPassword" placeholder="confirm password" className="p-3 rounded-md border-none outline-none bg-gray-800 text-white" />
            <button className="bg-gray-400 text-black font-bold p-2 hover:bg-gray-300 cursor-pointer absolute left-0 right-0 bottom-0">Register</button>
            <p className=" text-red-500 font-semibold">{state?.error}</p>
            <div className="flex items-center justify-center gap-2 mt-2">
                <span>Have an account?</span>
                <Link href="/auth/login" className="font-semibold underline">Login</Link>
            </div>
        </form>
    );
}

export default RegisterForm;

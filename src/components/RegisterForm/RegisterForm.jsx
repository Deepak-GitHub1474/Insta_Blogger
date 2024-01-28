"use client";

import { signup } from "@/lib/action";

import Link from "next/link";

import { useFormState } from "react-dom";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";

import {toast} from "react-hot-toast";
import Image from "next/image";

const SignupForm = () => {

    const [avatar, setAvatar] = useState("");
    const [loading, setLoading] = useState(false);

    const [state, formAction] = useFormState(signup, undefined);

    const router = useRouter();

    useEffect(() => {
        state?.success && router.push("/auth/login");
        state?.success && toast.success("Signup Successfully");
    }, [state?.success, router]);

    // Converting image base64
    const convertImgBase64 = (file) => {
        return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        setLoading(true)
        fileReader.onload = () => {
            resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
            reject("Error while convertImgBase64", error);
        };
        });
    };

    const uploadImage = async (event) => {
        const files = event.target.files;
        const base64 = await convertImgBase64(files[0]);
        setAvatar(base64);
        return;
    };

    return (
        <div className="min-h-[80vh] bg-gray-900 text-white flex items-center justify-center py-4 px-2">
            <form action={formAction} className="flex flex-col gap-4 sm:w-[500px] w-[95vw] pb-4 pt-4 px-2 rounded-lg shadow-[0_5px_5px_white] relative overflow-hidden">
                <h1 className="text-center font-bold text-3xl text-gray-400 mb-2">Signup Form</h1>
                <label htmlFor="img" className="mx-auto cursor-pointer">
                    {avatar ? (
                    <div className="w-20 h-20 relative rounded-full overflow-hidden object-cover">
                        <Image fill src={avatar} />
                    </div>
                    ) : (
                    <>
                        {loading ? (
                        <AiOutlineLoading3Quarters className="w-20 h-20 animate-spin" />
                        ) : (
                            <BsPersonCircle size={80} />
                        )}
                    </>
                    )}
                </label>
                <input type="file" name="img" id="img" className="hidden" onChange={uploadImage} />
                <input type="text" name="username" placeholder="username" className="p-3 rounded-md border-none outline-none bg-gray-800 text-white" />
                <input type="email" name="email" placeholder="email" className="p-3 rounded-md border-none outline-none bg-gray-800 text-white" />
                <input type="password" name="password" placeholder="password" className="p-3 rounded-md border-none outline-none bg-gray-800 text-white" />
                <input type="password" name="confirmPassword" placeholder="confirm password" className="p-3 rounded-md border-none outline-none bg-gray-800 text-white" />
                <button className="bg-gray-400 text-black font-bold rounded-md p-2 hover:bg-gray-300 cursor-pointer flex items-center justify-center">
                    {state?.success ?
                        <span className="flex items-center justify-center">
                            Signing... <AiOutlineLoading3Quarters className="ml-24 w-4 h-4 animate-spin absolute bottom-3" />
                        </span> :
                        <span className="flex items-center justify-center">Signup</span>
                    }
                </button>
                <p className=" text-red-500 font-semibold">{state?.error}</p>
                <div className="flex items-center justify-center gap-2 mt-2">
                    <span>Have an account?</span>
                    <Link href="/auth/login" className="font-semibold underline hover:text-blue-400">Login</Link>
                </div>
            </form>
        </div>
    );
}

export default SignupForm;
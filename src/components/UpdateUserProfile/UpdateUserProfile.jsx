"use client";

import { updateProfile } from "@/lib/action";

import Link from "next/link";

import { useFormState } from "react-dom";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { AiOutlineLoading3Quarters } from "react-icons/ai";

import {toast} from "react-hot-toast";
import Image from "next/image";

const UpdateUserProfile = ({user}) => {

    const [input, setInput] = useState({
        username: user?.username,
        bio: user?.bio,
    })
    const [avatar, setAvatar] = useState("");
    const [loading, setLoading] = useState(false);

    const [state, formAction] = useFormState(updateProfile, undefined);

    const router = useRouter();

    // Handle input change
    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setInput((prevInput) => ({
            ...prevInput,
            [name]: value,
        }));
    };

    // Push to profile page on successfull action
    useEffect(() => {
        state?.success && setLoading(true);
        state?.success && toast.success("Profile Updated Successfully");
        state?.success && router.push("/profile");
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

    // Handle image upload
    const uploadImage = async (event) => {
        const files = event.target.files;
        const base64 = await convertImgBase64(files[0]);
        setAvatar(base64);
        return;
    };

    return (
        <div className="min-h-[80vh] bg-gray-900 text-white flex flex-col items-center justify-center gap-5 p-4 relative">
            <Link href="/profile" className="w-fit py-1 px-2 rounded-md text-center bg-blue-600 hover:bg-blue-500 absolute top-4 right-4 flex items-center gap-4"> 
                <span className="font-semibold">GO TO PROFILE</span>
                <div className="w-6 h-6 relative rounded-full overflow-hidden object-cover animate-pulse">
                    <Image fill src={user?.img ? user?.img : "/avatar.png"} />
                </div>
            </Link>
            <form action={formAction} className="flex flex-col gap-4 sm:w-[500px] w-[95vw] pb-4 pt-4 px-2 rounded-lg shadow-[0_5px_5px_white] relative overflow-hidden">
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
                            <div className="w-20 h-20 relative rounded-full overflow-hidden object-cover">
                                <Image fill src={user?.img ? user?.img : "/avatar.png"} />
                            </div>
                        )}
                    </>
                    )}
                </label>
                <input type="hidden" name="userId" value={user?._id} />
                <input type="file" name="img" id="img" className="hidden" onChange={uploadImage} />
                <input 
                    type="text" 
                    name="username" 
                    value={input.username}
                    onChange={handleChange}
                    placeholder="username" 
                    className="p-3 rounded-md border-none outline-none bg-gray-800 text-white" 
                />
                <textarea 
                    name="bio" 
                    value={input.bio}
                    onChange={handleChange}
                    cols="10" rows="5" 
                    placeholder="bio" 
                    className="p-3 rounded-md border-none outline-none bg-gray-800 text-white" 
                />
                <button className="bg-gray-400 text-black font-bold rounded-md p-2 hover:bg-gray-300 cursor-pointer flex items-center justify-center relative">
                    {state?.success ?
                        <span className="flex items-center justify-center">
                            Saving... <AiOutlineLoading3Quarters className="ml-24 w-4 h-4 animate-spin absolute bottom-3" />
                        </span> :
                        <span className="flex items-center justify-center">Save</span>
                    }
                </button>
                <p className=" text-red-500 font-semibold">{state?.error}</p>
            </form>
        </div>
    );
}

export default UpdateUserProfile;

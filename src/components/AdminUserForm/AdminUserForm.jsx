"use client";

import { addUser } from "@/lib/action";
import { useFormState } from "react-dom";

const AdminUserForm = () => {

    const [state, formAction] = useFormState(addUser, undefined);

    return (
        <form action={formAction} className="flex flex-col gap-2 lg:w-[650px] w-[95vw] bg-gray-700 pb-16 px-2 rounded-lg shadow-[0_5px_5px_white] relative overflow-hidden">
            <h1 className="text-center font-bold text-2xl text-gray-400 mb-2">Add New User</h1>
            <input type="text" name="username" placeholder="username" className="p-3 rounded-md border-none outline-none bg-gray-800 text-white" />
            <input type="email" name="email" placeholder="email" className="p-3 rounded-md border-none outline-none bg-gray-800 text-white" />
            <input type="password" name="password" placeholder="password" className="p-3 rounded-md border-none outline-none bg-gray-800 text-white" />
            <input type="url" name="img" placeholder="url" className="p-3 rounded-md border-none outline-none bg-gray-800 text-white" />
            <select name="isAdmin" className="p-3 rounded-md border-none outline-none bg-gray-800 text-white">
                <option value="false" className="p-3 rounded-md border-none outline-none bg-gray-600 text-white text-center">-- Is Admin? --</option>
                <option value="false" className="p-3 rounded-md border-none outline-none bg-gray-600 text-white text-center">NO</option>
                <option value="true" className="p-3 rounded-md border-none outline-none bg-gray-600 text-white text-center">YES</option>
            </select>
            <button className="bg-gray-400 text-black font-bold p-2 hover:bg-gray-300 cursor-pointer absolute left-0 right-0 bottom-0">Add User</button>
            <p className=" text-red-500 font-semibold">{state?.error}</p>
        </form>
    );
}

export default AdminUserForm;

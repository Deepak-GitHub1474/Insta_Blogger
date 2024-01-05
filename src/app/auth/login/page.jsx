import { handleGithubLogin, login } from "@/lib/action";
import Image from "next/image";
import Link from "next/link";

const Login = async () => {

    return (
        <div className="min-h-[80vh] bg-gray-900 text-white flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col gap-6 sm:w-[500px] w-[95vw] bg-gray-700 pb-10 pt-8 px-2 rounded-lg shadow-[0_5px_5px_white] relative overflow-hidden">
                <form action={login} className="flex flex-col gap-4">
                    <h1 className="text-center font-bold text-3xl text-gray-400 mb-4">Login Form</h1>
                    <input type="email" name="email" placeholder="email" className="p-3 rounded-md border-none outline-none bg-gray-800 text-white" />
                    <input type="password" name="password" placeholder="password" className="p-3 rounded-md border-none outline-none bg-gray-800 text-white" />
                    <button className="bg-gray-400 text-black font-bold rounded-md p-2 hover:bg-gray-300 cursor-pointer">Login</button>
                    <div className="flex items-center justify-center gap-2 mt-2">
                        <span>Don't have an account ?</span>
                        <Link href="/register" className="font-semibold underline">SignUp</Link>
                    </div>
                </form>

                <div className="flex items-center justify-center gap-2">
                    <div className="border-t-[0.5px] mt-2 p-1 flex-1 opacity-50"></div>
                    <div className="">OR</div>
                    <div className="border-t-[0.5px] mt-2 p-1 flex-1 opacity-50"></div>
                </div>

                <form action={handleGithubLogin}>
                    <button className="bg-blue-800 text-white font-bold p-2 hover:bg-blue-600 cursor-pointer absolute left-0 right-0 bottom-0">
                        <span>Github Login</span>
                        <Image 
                            src="/github.png"
                            alt="github-logo"
                            fill
                            className="absolute translate-x-[5rem] object-contain"
                        />
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
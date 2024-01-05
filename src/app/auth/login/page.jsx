import { handleGithubLogin } from "@/lib/action";

const Login = async () => {

    return (
        <div className="min-h-[80vh] bg-gray-900 text-white flex flex-col items-center justify-center gap-4">
            <form action={handleGithubLogin} className="flex flex-col gap-2 md:w-[60vw] w-[95vw] bg-gray-700 pb-16 pt-8 px-2 rounded-lg shadow-[0_5px_5px_white] relative overflow-hidden">
                <h1 className="text-center font-bold text-3xl text-gray-400 mb-4">Login Form</h1>
                <input type="text" name="username" placeholder="username" className="p-3 rounded-md border-none outline-none bg-gray-800 text-white" />
                <input type="email" name="email" placeholder="email" className="p-3 rounded-md border-none outline-none bg-gray-800 text-white" />
                <input type="password" name="password" placeholder="password" className="p-3 rounded-md border-none outline-none bg-gray-800 text-white" />
                <button className="bg-gray-400 text-black font-bold rounded-md p-2 hover:bg-gray-300 cursor-pointer">Login</button>
                <div className="border-t-[0.5px] mt-2 p-1"></div>
                {/* <div className="">
                    <button className="bg-blue-800 text-white font-bold p-2 hover:bg-blue-600 cursor-pointer absolute left-0 right-0 bottom-0">
                        <span>Github Login</span>
                        <img src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="" className="w-8 absolute bottom-1 z-50 translate-x-[22.5rem]"/>
                    </button>
                </div> */}
            </form>
        </div>
    );
}

export default Login;
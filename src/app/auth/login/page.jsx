// import { auth, signIn } from "@/lib/auth";
import { handleGithubLogin } from "@/lib/action";

const Login = async () => {

    // const session = await auth();
    // console.log(session);

    // const handleGithubLogin = async () =>{
    //     "use server";
    //     await signIn("github");
    // }

    return (
        <div className="min-h-[80vh] bg-gray-900 text-white flex flex-col items-center justify-center gap-4">
            <form action={handleGithubLogin} className="flex flex-col gap-2 md:w-[60vw] w-[95vw] bg-gray-700 pb-16 pt-8 px-2 rounded-lg shadow-[0_5px_5px_white] relative overflow-hidden">
                <h1 className="text-center font-bold text-3xl text-gray-400 mb-4">Login Form</h1>
                <input type="text" name="title" placeholder="username" className="p-3 rounded-md border-none outline-none bg-gray-800 text-white" />
                <input type="email" name="description" placeholder="email" className="p-3 rounded-md border-none outline-none bg-gray-800 text-white" />
                <input type="password" name="img" placeholder="password" className="p-3 rounded-md border-none outline-none bg-gray-800 text-white" />
                <button className="bg-gray-400 text-black font-bold absolute bottom-0 left-0 right-0 p-2 hover:bg-gray-300 cursor-pointer">LogIn</button>
            </form>
        </div>
    );
}

export default Login;
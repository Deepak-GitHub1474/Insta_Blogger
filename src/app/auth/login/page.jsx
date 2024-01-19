import LoginForm from "@/components/LoginForm/LoginForm";
import { auth } from "@/lib/auth";

const Login = async () => {
    const session = await auth();

    return (
        <div className="min-h-[80vh] bg-gray-900 text-white flex items-center justify-center p-2">
            <LoginForm session={session}/>
        </div>
    );
}

export default Login;
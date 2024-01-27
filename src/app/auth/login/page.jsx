import LoginForm from "@/components/LoginForm/LoginForm";

import { loggedUser } from "@/lib/data";

const Login = async () => {
    
    const user = await loggedUser();

    return (
        <div className="min-h-[80vh] bg-gray-900 text-white flex items-center justify-center p-2">
            <LoginForm user={user}/>
        </div>
    );
}

export default Login;
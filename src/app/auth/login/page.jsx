import LoginForm from "@/components/LoginForm/LoginForm";

import { loggedUser } from "@/lib/data";

const Login = async () => {
    
    const user = await loggedUser();

    return (
        <LoginForm user={user}/>
    );
}

export default Login;
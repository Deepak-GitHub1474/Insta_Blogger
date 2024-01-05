import { auth } from "@/lib/auth";
import Header from "../Header";

const Navbar = async () => {

    const session = await auth();

    return (
        <div>
            <Header session={session} />
        </div>
    );
}

export default Navbar;

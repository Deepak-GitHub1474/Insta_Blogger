import Header from "../Header";
import { loggedUser } from "@/lib/data";

const Navbar = async () => {

    const user = await loggedUser();

    return (
        <div>
            <Header user={user} />
        </div>
    );
}

export default Navbar;

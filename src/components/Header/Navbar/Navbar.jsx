import { auth } from "@/lib/auth";
import Header from "../Header";

const Navbar = async () => {

    const session = await auth();
    console.log(session); // Check session if not print null else user obj and expires

    return (
        <div>
            <Header session={session} />
        </div>
    );
}

export default Navbar;

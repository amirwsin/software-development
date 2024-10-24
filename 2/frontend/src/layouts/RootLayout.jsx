import Navbar from "../components/Navbar/Navbar.jsx";
import {Outlet} from "react-router-dom";

const RootLayout = () => {
    return (
        <main>
            <Navbar/>
            <Outlet />
        </main>
    )
}

export default RootLayout
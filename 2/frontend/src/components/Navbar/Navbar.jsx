import routes from "./routes.js";
import NavbarLink from "./NavbarLink.jsx";
import styles from "./Navbar.module.css"
import {useLocation} from "react-router-dom";


const Navbar = () => {
    const location = useLocation()


    return (
        <header>
            <nav className={location.pathname === "/" ? styles.nav : styles.red}>
                <ul className={styles.navList}>
                    {
                        routes.map((item, index) => <NavbarLink key={index} title={item.title} href={item.href}/>)
                    }
                </ul>
            </nav>
        </header>
    )
}


export default Navbar
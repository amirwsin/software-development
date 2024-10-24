import {Link} from "react-router-dom";

const NavbarLink = ({title, href}) => {
    return (
        <li>
            <Link to={href}>{title}</Link>
        </li>
    )
}

export default NavbarLink
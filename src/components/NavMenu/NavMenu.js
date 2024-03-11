import {NavLink} from "react-router-dom";

import "./NavMenu.css";
import beansMenu from "../../assets/icons/main_header_top-menu_coffee-beans.png";

const NavMenu = () => {

    const active = ({isActive}) => {
        return {textShadow: isActive ? "4px 4px 3px rgba(255, 255, 255, 1)" : null}};

    return (
        <div className="nav">
            <img className="nav__icon" src={beansMenu} alt="coffee beans"/>
            <nav className="nav__links">
                <NavLink end style={active} to="/" className="nav__link">Coffee house</NavLink>
                <NavLink end style={active} to="/coffee" className="nav__link">Our coffee</NavLink>
                <NavLink end style={active} to="/best" className="nav__link">For your pleasure</NavLink>
            </nav>
        </div>
       
    );
};

export default NavMenu;
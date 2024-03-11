import {NavLink} from "react-router-dom";

import "./NavMenuBottom.css";
import beansMenuBlack from "../../assets/icons/coffee-beans_two_black.png";

const NavMenuBottom = () => {

    const active = ({isActive}) => {
        return {textShadow: isActive ? "0 0 10px rgba(106, 38, 2, 1)" : null}};

    return (
        <div className="nav_bottom">
            <img className="nav_bottom__icon" src={beansMenuBlack} alt="coffee beans"/>
            <nav className="nav_bottom__links">
                <NavLink end style={active} to="/" className="nav_bottom__link">
                        Coffee house
                </NavLink>
                <NavLink end style={active} to="/coffee" className="nav_bottom__link">
                    Our coffee
                </NavLink>
                <NavLink end style={active} to="/best" className="nav_bottom__link">
                    For your pleasure
                </NavLink>
            </nav>
        </div>
       
    );
};

export default NavMenuBottom;
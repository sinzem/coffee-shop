import { Link } from "react-router-dom";
import Divider from "../Divider/Divider";
import Title from "../Title/Title";

import "./HeaderMain.css";
import whiteBeans from "../../assets/icons/main_header_subtitle_coffee-beans.png";
import NavMenu from "../NavMenu/NavMenu";



const HeaderMain = () => {
    return (
        <div className="header header__main">
            <div className="container header__container"> 
                <NavMenu />
                <Title children="Everything You Love About Coffee" title="title__main"/>
                <Divider src={whiteBeans} color="white" marginTop="20px"/>
                <h2 className="subtitle header__subtitle">
                    We makes every day full of energy and taste
                </h2>
                <h2 className="subtitle header__subtitle header__subtitle_bottom">
                    Want to try our beans?
                </h2>
                <button className="header__button">
                    <Link to="/more" className="header__button__link">More</Link>
                </button>
            </div>
        </div>
    );
};

export default HeaderMain;
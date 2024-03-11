
import Title from "../Title/Title";

import "./Header.css";
import NavMenu from "../NavMenu/NavMenu";



const Header = ({src, title}) => {
    return (
        <div className="header header__secondary" style={{backgroundImage: `url(${src})`}}>
            <div className="container header__secondary__container"> 
                <NavMenu />
                <Title children={title}/>
            </div>
        </div>
    );
};

export default Header;
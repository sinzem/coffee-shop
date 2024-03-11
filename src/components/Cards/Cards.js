import { Link } from "react-router-dom";

import "./Cards.css";

const Cards = ({props, origin = true}) => {

    const {id, img, name, country, price} = props;

    return (
        <Link to={`/coffee/:${id}`} className="cards cards__wrap">
            <img className="cards__img" src={`${img}`} alt="coffee"/>
            <h4 className="cards__text cards__name">{name}</h4>

            {origin &&
                <h4 className="cards__text cards__country">{country}</h4>
            }
                <h4 className="cards__text cards__price">{price}</h4>
        </Link>
    );
};

export default Cards;



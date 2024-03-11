
import "./CardsBlock.css";
import Cards from "../Cards/Cards";

const CardsBlock = ({offset, coffeeList, origin}) => {
    return (
        <div className="cards_block">
            {coffeeList && coffeeList.map((item, index) => 
                index < offset ? 
                    <Cards props={item} key={item.id} origin={origin}/> : null
            )} 
        </div>
    );
};

export default CardsBlock;
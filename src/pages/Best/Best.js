import { useEffect, useContext, useState } from "react";

import { List } from "../../context";
import "./Best.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Divider from "../../components/Divider/Divider";
import CardsBlock from "../../components/CardsBlock/CardsBlock";
import Button from "../../components/button/Button";

import imgForBestBg from "../../assets/img/for-your-pleasure_header_bg.png";
import imgForAbout from "../../assets/img/for-your-pleasure_description_coffee.png";

const Best = () => {

    const {coffeeList} = useContext(List);

    const [coffeeBest, setCoffeeBest] = useState(coffeeList);
    const [offsetBest, setOffsetBest] = useState(6);

    function moreOffsetBest() {
        if ((coffeeBest.length - offsetBest) > 0) {
            setOffsetBest(offsetBest + 6);
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
            <Header src={imgForBestBg} title="For Your Pleasure"/>
            <section className="best">
                <div className="best__img">
                    <img src={imgForAbout} alt="cup of coffee"/>
                </div>
                <div className="best__text-block">
                    <h2 className="subtitle best__subtitle">About our beans</h2>
                    <Divider/>
                    <div className="best__description">
                        <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                        <br/>
                        <p>Afraid at highly months do things on at. Situation recommend objection do intention<br/>
                            so questions. </p>
                        <p>As greatly removed calling pleased improve an.</p>
                        <p>Last ask him cold feel<br/>
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.</p>
                    </div>
                </div>
            </section>
            <section className="best-list">
                <div className="best-list__divider"></div>
                <div className="coffee-list-block__cards-block">
                        <CardsBlock offset={offsetBest} coffeeList={coffeeBest} countryView={false}/>
                        {coffeeBest.length - offsetBest > 0 ? 
                        <Button callback={moreOffsetBest}/> : null }
                    </div>
            </section>
            <Footer/>
        </div>
    );
};

export default Best;
import { useEffect, useState } from "react";

import "./Best.css";
import { useFetching } from "../../context/request";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Divider from "../../components/Divider/Divider";
import CardsBlock from "../../components/CardsBlock/CardsBlock";
import Button from "../../components/button/Button";

import imgForBestBg from "../../assets/img/for-your-pleasure_header_bg.png";
import imgForAbout from "../../assets/img/for-your-pleasure_description_coffee.png";

const Best = () => {

    const [fetching, isLoading, error] = useFetching(async () => {
        let response = await fetch("./db.json");
        let data = await response.json();
        setCoffeeBest(data);
    });

    const [coffeeBest, setCoffeeBest] = useState([]);
    const [offsetBest, setOffsetBest] = useState(6);

    function moreOffsetBest() {
        if ((coffeeBest.length - offsetBest) > 0) {
            setOffsetBest(offsetBest + 6);
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        fetching();
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
                {isLoading 
                    ? 
                        <h2 className="subtitle" style={{marginTop: 10}}>Loading...</h2> 
                    :
                        error
                    ? 
                        <>
                            <h2 className="subtitle" style={{marginTop: 50}}>Sorry, there was an error</h2> 
                            <h2 className="subtitle" style={{marginTop: 20}}>{error}</h2> 
                        </>
                    :
                    //     coffeeBest.length > 0
                    // ?
                        <div className="coffee-list-block__cards-block">
                            <CardsBlock offset={offsetBest} coffeeList={coffeeBest} countryView={false}/>
                            {coffeeBest.length - offsetBest > 0 ? 
                            <Button callback={moreOffsetBest}/> : null }
                        </div>
                    // :
                    //     <h2 className="subtitle" style={{marginTop: 50}}>Sorry, no products available today</h2> 
                }
                
            </section>
            <Footer/>
        </div>
    );
};

export default Best;
import { useContext, useEffect, useState } from "react";

import "./Home.css";
import { List } from "../../context";
import Divider from "../../components/Divider/Divider";
import Footer from "../../components/Footer/Footer";
import HeaderMain from "../../components/HeaderMain/HeaderMain";
import Button from "../../components/button/Button";
import CardsBlock from "../../components/CardsBlock/CardsBlock";



const Home = () => {
   
    const {coffeeList, isLoading, error} = useContext(List);

    const [bestCoffee, setBestCoffee] = useState([]);
    const [bestOffset, setBestOffset] = useState(3);

    function getBests() {
        let arrBest = [];
        coffeeList.forEach(i => i.best ? arrBest.push(i) : null);
        setBestCoffee(arrBest);
    }

    useEffect(() => {
        getBests();
    }, [coffeeList]);

    function moreOffset() {
        if ((bestCoffee.length - bestOffset) > 0) {
            setBestOffset(bestOffset + 3);
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
            <HeaderMain />
            <section className="home_about">
                <h2 className="subtitle home_about__subtitle">About Us</h2>
                {/* <button style={{height: 40, width: 100}} onClick={app}></button> */}
                <Divider/>
                <div className="description home_about__description">
                    <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face.</p>
                    <p>Now residence dashwoods she excellent you. Shade being under his bed her, Much
                    read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                    horrible but confined day end marriage. Eagerness furniture set preserved far
                    recommend. Did even but nor are most gave hope. Secure active living depend son
                    repair day ladies now.</p>
                </div>
            </section>
            <section className="home_best">
                <h2 className="subtitle home_best__subtitle">Our bests</h2>
                {isLoading 
                    ? 
                        <h2 className="subtitle" style={{marginTop: 10}}>Loading...</h2> 
                    : 
                        error 
                    ? 
                        <h2 className="subtitle" style={{marginTop: 10}}>Sorry, there was an error</h2> 
                    :
                        <CardsBlock
                            offset={bestOffset} 
                            coffeeList={bestCoffee} 
                            origin={false}
                        />
                }
                {bestCoffee.length - bestOffset > 0 ? 
                        <Button callback={moreOffset}/> : null }
                
            </section>
            <Footer />
        </div>
    );
};

export default Home;
import { useEffect, useState } from "react";

import "./Coffee.css";
import { useFetching } from "../../context/request";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CardsBlock from "../../components/CardsBlock/CardsBlock";
import Button from "../../components/button/Button";
import Divider from "../../components/Divider/Divider";

import imgBg from "../../assets/img/our-coffee_header_bg.jpg";
import imgCoffeeAbout from "../../assets/img/our-coffee_description_girl.jpg";

const Coffee = () => {

    const [fetching, isLoading, error] = useFetching(async () => {
        let response = await fetch("./db.json");
        let data = await response.json();
        setCoffeeList(data);
        setCoffeeAll(data);
    });

    const [coffeeList, setCoffeeList] = useState([]);
    const [coffeeAll, setCoffeeAll] = useState([]);
    const [offsetAll, setOffsetAll] = useState(6);
    const [searchName, setSearchName] = useState("");
    const [originFilter, setOriginFilter] = useState("");

    function moreOffsetAll() {
        if ((coffeeAll.length - offsetAll) > 0) {
            let offsetAdd = offsetAll + 6;
            setOffsetAll(offsetAdd);
        }
    }

    function searchFromCoffeeAll(property, arr, nx) {
        if (property === "") {
            return arr;
        } 
        return arr.filter(item => {
            
            return item[nx].toLowerCase().indexOf(property.toLowerCase()) > -1
        })
    }
 
    function onSetSearchName(val) {
        setOriginFilter("");
        setSearchName(val);
    }


    function onSetOriginFilter(val) {
        setSearchName("");
        setOriginFilter(val);
    }
    

    useEffect(() => {
        window.scrollTo(0, 0);
        fetching();
    }, [])

    // useEffect(() => {
    //     setCoffeeAll(coffeeList);
    // }, [coffeeList])

    useEffect(() => {
        let newArr = searchFromCoffeeAll(searchName, coffeeList, "name");
        setCoffeeAll(newArr);
    }, [searchName]);


    useEffect(() => {
        let newCountryArr = searchFromCoffeeAll(originFilter, coffeeList, "country")
        setCoffeeAll(newCountryArr);
    }, [originFilter]);

    
   
    const buttons = ["Brasil", "Kenya", "Columbia"];
    const button =  buttons.map(item => { 
        const buttonClassName = item === originFilter ? "coffee-list-block__filters_button active" : "coffee-list-block__filters_button";
        return  <button 
            key={item}
            className={buttonClassName} 
            onClick={(e) => onSetOriginFilter(e.target.textContent)}>
            {item}
        </button>
    })

   
    return (
        <div>
            <Header src={imgBg} title="Our Coffee"/>
            <section className="coffee-about">
                <div className="coffee-about__img">
                    <img src={imgCoffeeAbout} alt="girl with coffee"/>
                </div>
                <div className="coffee-about__text-block">
                    <h2 className="subtitle coffee-about__subtitle">About our beans</h2>
                    <Divider/>
                    <div className="coffee-about__description">
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
            <section className="coffee-list">
                <div className="coffee-list__divider"></div>
                <div className="coffee-list-block">
                    <div className="coffee-list-block__wrap">
                        <div className="coffee-list-block__search">
                            <label htmlFor="search" className="coffee-list-block__search_label">Looking for</label>
                            <input 
                                name="search" 
                                className="search"
                                placeholder="start search here..."
                                value={searchName}
                                onChange={e => onSetSearchName(e.target.value)}
                            />
                        </div>
                        <div className="coffee-list-block__filters">
                            <div className="coffee-list-block__filters_label">Or filter</div>
                            <div className="coffee-list-block__filters_buttons">
                                {button}
                            </div>
                        </div>
                    </div>
                    <div className="coffee-list-block__cards-block">
                        {isLoading 
                            ? 
                                <h2 className="subtitle" style={{marginTop: 100}}>Loading...</h2> 
                            :
                                error
                            ? 
                                <>
                                    <h2 className="subtitle" style={{marginTop: 100}}>Sorry, there was an error</h2> 
                                    <h2 className="subtitle" style={{marginTop: 50}}>{error}</h2> 
                                </> 
                            :
                                coffeeAll.length > 0 
                                    ?
                                        <>
                                            <CardsBlock offset={offsetAll} coffeeList={coffeeAll} countryView={false}/>
                                            {coffeeAll.length - offsetAll > 0 ? 
                                                <Button callback={moreOffsetAll}/> : null}
                                        </>
                                    : 
                                        <h2 className="subtitle" style={{margin: "300px 0px"}}>No products found for this request</h2>
                        }
                       
                    </div>
                    
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Coffee;
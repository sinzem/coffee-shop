import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./CoffeeCard.css"
import { useFetching } from "../../context/request";

import imgForCardHeader from "../../assets/img/our-coffee_header_bg.jpg";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Divider from "../../components/Divider/Divider";



const CoffeeCard = () => {

    const [fetching, isLoading, error] = useFetching(async () => {
        let response = await fetch("./../db.json");
        let data = await response.json();
        if (data.length === 0) return setCoffeeCardId([]);
        let dataId = data.filter(item => +item.id === +getId.id.replace(/:/g, "") ? item : null);
        setCoffeeCardId(dataId);
    });

    const getId = useParams();

    const [coffeeCardId, setCoffeeCardId] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        fetching();
    }, [])

    return (
        <div className="coffee-card">
            <Header src={imgForCardHeader} title = "Our Coffee"/>
            <section className="card-id">
            {isLoading 
                    ? 
                        <h2 className="subtitle" style={{marginTop: 10}}>Loading...</h2> 
                    : 
                        error 
                    ? 
                        <>
                            <h2 className="subtitle" style={{marginTop: 10}}>Sorry, there was an error</h2> 
                            <h2 className="subtitle" style={{marginTop: 20}}>{error}</h2> 
                        </>
                    :
                    coffeeCardId.length > 0 
                        ? 
                            coffeeCardId.map(item => {
                                return <div className="card-id__wrap" key={item.id}>
                                            <div className="card-id__img">
                                                <img src={item.img} alt="Coffee"/>
                                                
                                            </div>
                                            <div className="card-id__text-block">
                                                <h2 className="subtitle cartd-id__subtitle">About it</h2>
                                                <Divider/>
                                                <div className="card-id__text card-id__country"><span>Country: </span>{item.country}</div>
                                                <div className="card-id__text card-id__description"><span>Description: </span>{item.description}</div>
                                                <div className="card-id__text card-id__price"><span>Price:  </span> {item.price}$</div>
                                            </div>
                                        </div>
                            })
                        : 
                            <h2 className="subtitle" style={{marginTop: 100}}>
                                Sorry, we don't have coffee for this request...
                            </h2>
                      
                }
 
            </section>    
            <Footer />
        </div>
    );
};

export default CoffeeCard;



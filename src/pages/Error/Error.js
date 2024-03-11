import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import img from "../../assets/img/grad_2.png";


const Error = (error) => {
    return (
        <div>
            <Header src={img} title="Non-existent address"/>
                <section className="unexistent__section">
                    <h2 className="unexistent__text">Sorry, there was an error {error}</h2>
                </section>
            <Footer/>
        </div>
    );
};

export default Error;
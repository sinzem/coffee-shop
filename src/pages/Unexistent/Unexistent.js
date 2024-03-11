import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Unexistent.css";

import img from "../../assets/img/grad_2.png";

const Unexistent = () => {
    return (
        <div className="unexistent">
            <Header src={img} title="Non-existent address"/>
                <section className="unexistent__section">
                    <h2 className="unexistent__text">Sorry, there is no page with this address</h2>
                </section>
            <Footer/>
        </div>
    );
};

export default Unexistent;
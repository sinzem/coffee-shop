import "./More.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import img from "../../assets/img/for-your-pleasure_header_bg.png";
import Divider from "../../components/Divider/Divider";


const More = () => {
    return (
        <div className="more">
            <Header src={img} title={"More About Our Beans"}/>
            <section className="more__section">
                <h1 className="subtitle more__subtitle">About Our Beans</h1>
                <Divider/>
                <div className="more__section__block">
                    <p className="more__section__description">
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.

                        Now residence dashwoods she excellent you. Shade being under his bed her, Much
                        read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                        horrible but confined day end marriage. Eagerness furniture set preserved far
                        recommend. Did even but nor are most gave hope. Secure active living depend son
                        repair day ladies now.
                    </p>
                    <p className="more__section__description">
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.

                        Now residence dashwoods she excellent you. Shade being under his bed her, Much
                        read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                        horrible but confined day end marriage. Eagerness furniture set preserved far
                        recommend. Did even but nor are most gave hope. Secure active living depend son
                        repair day ladies now.
                    </p>
                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default More;





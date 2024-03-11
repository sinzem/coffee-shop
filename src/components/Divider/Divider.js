import "./Divider.css";
import blackBeans from "../../assets/icons/coffee-beans_black.png";


const Divider = ({src = blackBeans, color = "black", marginTop = "30px"}) => {
    return (
        <div className="divider divider__main" style={{marginTop: `${marginTop}`}}>
            <div className="divider__line" style={{background: `${color}`}}></div>
            <img src={src} alt="coffee beans"/>
            <div className="divider__line" style={{background: `${color}`}}></div>
        </div>
    );
};

export default Divider;

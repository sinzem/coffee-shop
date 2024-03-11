
import "./button.css";

const Button = ({callback}) => {
    return (
        <button className="button" onClick={callback}>
            <p>More</p>
        </button>
    );
};

export default Button;
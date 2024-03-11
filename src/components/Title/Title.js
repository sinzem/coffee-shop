import "./Title.css"

const Title = ({children, title = "title__secondary"}) => {
    return (
        <h1 className={`header__title ${title}`}>
            {children}
        </h1>
    );
};

export default Title;
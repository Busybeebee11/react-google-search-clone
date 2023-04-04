
const LanguageItems = (props) => {
    return (
        <>
            <a href={props.link} className="language-link">
                {props.title}
            </a>
        </>
    );
};

export default LanguageItems
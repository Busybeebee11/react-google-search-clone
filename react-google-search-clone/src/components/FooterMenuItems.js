
const FooterMenuItems = (props) => {
    return (
        <>
            <a href={props.link} className="footer-link">
                {props.title}
            </a>
        </>
    );
};

export default FooterMenuItems
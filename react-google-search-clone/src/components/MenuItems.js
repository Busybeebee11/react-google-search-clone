
const MenuItems = (props) => {
    return (
        <a href={props.link} className="menu-item">
            {props.title}
        </a>
    );
};

export default MenuItems
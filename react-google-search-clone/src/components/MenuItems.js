
const MenuItems = (props) => {
    return (
        <div className="menu-item">
            <a href={props.link} className="menu-item-link">
                {props.title}
            </a>
        </div>
    );
};

export default MenuItems
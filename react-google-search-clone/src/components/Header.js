import MenuItems from "./MenuItems";
import AppsLauncherIcon from "./AppsLauncherIcon";
import Avatar from "./Avatar";

import "../styles/header.css";


const Header = () => {
    return (
        <div className="app-header-cont">
            <div className="app-header-end">
                <div className="app-header">
                    <div className="menu-item-cont">
                        <div className="menu-item">
                            <MenuItems title={"Gmail"} link={"google.com"} />
                            <MenuItems title={"Images"} link={"https://www.google.com.ng/imghp?hl=en-GB&tab=ri&authuser=0&ogbl"} />
                        </div>
                    </div>
                    
                    <div className="menu-images">
                        <AppsLauncherIcon />
                        <Avatar />
                    </div>

                </div>

            </div>
          
        </div>
  )
}

export default Header
import React, { useState } from 'react';
import Icon from '../images/app-launcher.svg'

const AppsLauncherIcon = () => {
    
    // useState to create tooltip on hover
    const [showTitle, setShowTitle] = useState(false);

    const handleMouseOver = () => {
        setShowTitle(true);
    }

    const handleMouseOut = () => {
        setShowTitle(false);
    }

    return (
        <div className='app-launcher-cont'>
            <a href="google.com">
                <img src={Icon} alt="apps launcher"
                    className="app-launcher-svg"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    title={showTitle ? "Google apps" : null}
                />
            </a>
        </div>
    )
}

export default AppsLauncherIcon
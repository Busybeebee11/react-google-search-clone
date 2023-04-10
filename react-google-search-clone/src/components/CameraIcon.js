import Icon from '../images/camera.svg'
import React, { useState } from 'react'

const CameraIcon = () => {

    // useState to create tooltip on hover
    const [showTitle, setShowTitle] = useState(false);

    const handleMouseOver = () => {
        setShowTitle(true);
    }

    const handleMouseOut = () => {
        setShowTitle(false);
    }

    return (
        <>
            <span>
                <img src={Icon} alt="-mic icon" className="search-icon2-img"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    title={showTitle ? "Search by image" : null}
                />
            </span>
        </>
    )
}

export default CameraIcon
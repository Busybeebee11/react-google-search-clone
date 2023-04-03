import React, { useState } from 'react';
import Icon from '../images/avatar.jpg'

const Avatar = () => {
    
    // useState to create tooltip on hover
    const [showTitle, setShowTitle] = useState(false);

    const handleMouseOver = () => {
        setShowTitle(true);
    }

    const handleMouseOut = () => {
        setShowTitle(false);
    }

    // tooltip info
    const title = showTitle ? 'Google Account\nBlessing Olusiyan\nBusybee@gmail.com' : '';

    return (
        <div className='avatar-cont'>
            <a href='google.com'>
                <img src={Icon} alt="avatar"
                    className="avatar-img"
                    style={{ width: "32px", borderRadius: "50%" }}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    title={title}
                />
            </a>
        </div>
  )
}

export default Avatar

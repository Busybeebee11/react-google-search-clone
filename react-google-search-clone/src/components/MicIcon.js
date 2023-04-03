import Icon from '../images/mic.svg'
import React, { useState } from 'react'

const MicIcon = () => {

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
              <img src={Icon} alt="-mic icon"
                  style={{ width: "24px", height: "24px" }}
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  title={showTitle ? "Search by voice" : null}
              />
          </span>
      </>
  )
}

export default MicIcon
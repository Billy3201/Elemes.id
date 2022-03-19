import React from 'react'
import { useState } from 'react'
import { FaStar } from "react-icons/fa"

function Star() {
    const [currentValue, setCurrentValue]= useState(0);
    const [hoverValue, setHoverValue]= useState(undefined);

    const stars = Array(5).fill(0)

    const colors = {
        orange: "#FFBA5A",
        grey: "#a9a9a9"
    };
    
    const handleClick = value => {
        setCurrentValue(value)
    }

    const handleMouseOver = value => {
        setHoverValue(value)
    }

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }

  return (
    <>
        {stars.map((_, index) => {
            return    <FaStar
            size={12}
            color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
            style={{
                marginRight: "2px",
                cursor: "pointer"
            }}
            onClick={() => handleClick(index + 1)}
            onMouseOver={() => handleMouseOver(index + 1)}
            onMouseLeave={handleMouseLeave}
            />
        })}
    </>
  )
}

export default Star
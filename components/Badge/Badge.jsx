import React from "react"
import badgeColors from "./Badge-colors.js"

export default function Badge({children, shape, color, size}) {
    return (
        <div 
            style={{...badgeColors[color], fontSize: size}}
            className={`badge ${shape}`}
        >
            {children}
        </div>
    )
}

// {fontSize: size}
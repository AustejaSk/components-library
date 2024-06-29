import React from "react"
import { neutralIcon, successIcon, warningIcon, errorIcon } from "../icons/banner-icons/banner-icons.js"

export default function Banner({variant, title, text, size}) {
    
    const variantIcons = {
        success: successIcon,
        warning: warningIcon,
        error: errorIcon,
        neutral: neutralIcon
    }
    
    const variantIcon = variantIcons[variant] || neutralIcon   
    
    return (
        <div style={{fontSize: size}} className={`banner ${variant}`}>
            <img className="banner-icon" src={variantIcon} />
            <div>
                <h1 className="banner-title">{title}</h1>
                {text && <p className="banner-text">{text}</p>}
            </div>
        </div>   
    )
}
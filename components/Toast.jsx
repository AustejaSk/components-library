import React from "react"
import {createPortal} from "react-dom"
import { successIcon, warningIcon, errorIcon, neutralIcon } from "../icons/toast-icons/toast-icons.js"

export default function Toast({variant, text}) {
    
    const variantIcons = {
        neutral: neutralIcon,
        success: successIcon,
        warning: warningIcon,
        error: errorIcon
    }
    
    const titleText = {
        neutral: "Information",
        success: "Success",
        warning: "Warning",
        error: "Error"
    }
    
    return (
        <>
            {createPortal(
                <div className={`toast-container ${variant}`}>
                    <img src={variantIcons[variant] || neutralIcon} />
                    <div className="toast-text">
                        <h1>{titleText[variant] || titleText.neutral}</h1>
                        <p>{text}</p>
                    </div>
                </div>,
                document.body
            )}
        </>
    )
}
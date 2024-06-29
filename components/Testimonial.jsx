import React from "react"
import quoteIcon from "../icons/quote-icon.svg"

export default function Testimonial({backgroundColor, textColor, image, alt, children}) {
    return (
        <div className="testimonial" style={{backgroundColor: backgroundColor}}>
            <img src={image} alt={alt}/>
            <div className="testimonial-text-container" style={{color: textColor}}>
                <img src={quoteIcon}/>
                {children}
            </div>
        </div>
    )
}
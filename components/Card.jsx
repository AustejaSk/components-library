import React from "react"
import clouldIcon from "../icons/cloud-upload.svg"

export default function Card({title, text, icon, iconBgColor}) {
    return (
       <div className="card">
            <img 
                style={{backgroundColor: iconBgColor}}
                src={icon || clouldIcon}
            />
            <h1>{title}</h1>
            <p>{text}</p>
       </div> 
    )
}
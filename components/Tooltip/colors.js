const getColors = (style) => {
    return style === "bold" ? {
        black: {backgroundColor: "#262626", color: "#C7C7C7"},
        blue: {backgroundColor: "#1E40AF", color: "#E8EDFF"},
        pink: {backgroundColor: "#A9229B", color: "#FFE9FD"},
        green: {backgroundColor: "#47AA5D", color: "#E3FFE9"}
    } : {
        black: {backgroundColor: "#FFFFFF", color: "#6B7280"},
        blue: {backgroundColor: "#E0E7FF", color: "#1C51B9"},
        pink: {backgroundColor: "#FFF3FC", color: "#C7369E"},
        green: {backgroundColor: "#E7FFF3", color: "#3C8C4E"}
    }
}
    
const getTitleColor = (style) => {
    return style === "bold" ?
        {color: "#FFFFFF"} :
        {
            black: {color: "#111827"},
            blue: {color: "#1E40AF"},
            pink: {color: "#A9229B"},
            green: {color: "#137A2A"}
        }
}
    
const getIconsColor = (style) => {
    return style === "bold" ? 
        {
            black: {color: "#C7C7C7"},
            blue: {color: "#7EA6F2"},
            pink: {color: "#F462E6"},
            green: {color: "#C1FFCF"}
        } : 
        {
            black: {color: "#6B7280"},
            blue: {color: "#1C51B9"},
            pink: {color: "#C7369E"},
            green: {color: "#41A557"}
        }
}

export { getColors, getTitleColor, getIconsColor }
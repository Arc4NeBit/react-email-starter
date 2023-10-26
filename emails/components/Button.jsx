import React from "react";
// could go further and pass in all kinds of styles and functions here or group all together into one single style prop
function Button({
    href , children, buttonStyles, sectionStyles
}) {
    return (
        <a href={href} style={{...buttonStyles }}>
            {children}
        </a>
    );
}
export default Button
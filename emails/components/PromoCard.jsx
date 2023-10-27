import React from "react";

const containerStyle = {
    display: 'inline-block',  
    width: '43%',
    margin: '2% 3% auto'
}

const titleDefaultStyles = {
    fontSize: "20px",
    padding: "5px",
    display: "block",
    textDecoration: "none",
    color: "#f6f6f6",
    background: "#000000",
    margin: "auto",
    textAlign: "center",
};

const imgDefaultStyles = {
    opacity: "70%",
    cursor: "pointer",
    objectFit: "cover",
    width: "100%",
    height: "150px",
};

const outlineStyle = {
    display: "inline-block",
    textDecoration: "none", 
    // padding: "0", 
    width: "100%", 
    height: "100%", 
    margin: "0 3% 5% 3%",
    border: "5px solid black"
}

function PromoCard({href, imghref, title}) {
    return(
        <div style={containerStyle}>
            <div style={outlineStyle}>
                <a href={href} style={{textDecoration: "none", padding: "0", width: '100%', height: "100%", display: "inline-block"}}>
                    <img src={imghref} alt="" style={imgDefaultStyles} className="promo-img"/>
                    <p className="promo-title" style={{...titleDefaultStyles}} >{title}</p>
                </a>
            </div>
        </div>
    )
}

export default PromoCard;
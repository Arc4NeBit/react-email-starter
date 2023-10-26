import React from "react";

const titleDefaultStyles = {
    fontSize: "20px",
    padding: "5px",
    display: "block",
    textDecoration: "none",
    // position: "relative",
    // top: "-80px",
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

function PromoCard({href, imghref, title}) {
    return(
        <a href={href} style={{textDecoration: "none", padding: "0", display: "block", width: "44%", height: "100%", display: "inline-block", margin: "0 3% 5% 3%"}}>
            <img src={imghref} alt="" style={imgDefaultStyles} className="promo-img"/>
            <p className="promo-title" style={{...titleDefaultStyles}} >{title}</p>
        </a>
    )
}

export default PromoCard;
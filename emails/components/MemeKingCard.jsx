import React from "react";

const tableStyle = {
    display: 'inline-block', 
    width: '42%', 
    margin: '2% 2% 2% 5%',
    verticalAlign: 'middle',

}

const tbodyStyle = {
    display: 'inline-block', 
    width: "100%", 
    height: '70%',
    // //margin: "0 3% 5% 3%",
}

const tdDefaultStyles = {
    display: "inline-block",
    height: "100%",
    width: '100%',
    textAlign: "center",
    border: "5px solid black"

}

const titleDefaultStyles = {
    fontSize: "20px",
    display: "block",
    textDecoration: "none",
    position: "relative",
    color: "#f6f6f6",
    background: "#000000",
    margin: "auto",
    textAlign: "center",
    border: '2px solid white',
    padding: '3px'
};

function MemeKingCard({title, description}) {
    return(
        <div style={tableStyle} className="meme-king-table">
            <div style={tbodyStyle}>
                    <div style={tdDefaultStyles} className="meme-king-td">
                        <h1 style={{...titleDefaultStyles}} className="meme-king-title">{title}</h1>
                        <p className="promo-title">{description}</p>
                    </div>
            </div>
        </div>
    )
}

export default MemeKingCard;
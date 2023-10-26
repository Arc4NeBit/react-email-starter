import React from "react";

const titleDefaultStyles = {
    fontSize: "20px",
    padding: "5px",
    display: "block",
    textDecoration: "none",
    position: "relative",
    color: "#f6f6f6",
    background: "#000000",
    margin: "auto",
    textAlign: "center",
};
const tdDefaultStyles = {
    display: "inline-block",
    border: "5px solid black",
    borderBottom: "30px solid black",
    height: "100%",
    width: '100%',
    textAlign: "center",
}

function MemeKingCard({title, description}) {
    return(
        <table style={{display: 'inline-block', width: '43%', margin: '2% 3% auto'}}>
            <tbody style={{display: 'inline-block', width: "100%", height: '70%'}}>
                <tr style={{display: "inline-block", width: '95%', height: "100%"}}>
                    <td style={tdDefaultStyles} className="meme-king-td">
                        <h1 style={{...titleDefaultStyles}} className="meme-king-title">{title}</h1>
                        <p className="promo-title">{description}</p>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default MemeKingCard;
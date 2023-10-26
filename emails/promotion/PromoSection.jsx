import React from "react";
import { PromotionArray } from "./PromotionData";
import PromoCard from  "../components/PromoCard.jsx";

function PromoSection() {
    return(
       <>
        {   
            PromotionArray.map((row)=>{
                let href = row.href;
                let title = row.title;
                let imghref = row.imghref;
                return <PromoCard href={href} title={title} imghref={imghref}/>;
            })
        }
       </>
    )
}

export default PromoSection;
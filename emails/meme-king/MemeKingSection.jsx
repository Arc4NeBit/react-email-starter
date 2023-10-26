import React from "react";
import { MemeKingArray } from "./MemeKingData";
import MemeKingCard from "../components/MemeKingCard";

function MemeKingSection() {
    return(
       <>
        {   
            MemeKingArray.map((row, id)=>{
                let title = row.title;
                let description = row.description;
                return <MemeKingCard key={id} title={title} description={description}/>;
            })
        }
       </>
    )
}

export default MemeKingSection;
import React from "react";
import CompletedGoalItems from "./CompletedGoalItems";

function Accomplishments({ accomplishments, onDeleteClick }){

    const renderAccomplishments = accomplishments.map(accomplishment => {
        return(
            <CompletedGoalItems 
                key={accomplishment.id} 
                accomplishment={accomplishment}
                onDeleteClick={onDeleteClick} 
                />
        )
    })


    return(
        <div id="accomplishments-container">
                {renderAccomplishments}
        </div>
    );

}

export default Accomplishments;
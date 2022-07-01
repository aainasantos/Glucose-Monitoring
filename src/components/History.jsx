import React from "react";

function History({history, historyDate}){
    const time = new Date().toLocaleTimeString();

    return(
        <div className="history">
           <p>{history}</p> 
           <p>{historyDate}</p>
           <p>{time}</p>
        </div>
    );
}

export default History;
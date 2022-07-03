import React from "react";

function CurPrev({currLevel, prevLevel}){
    return (
        <div className="prev-cur-container">
        <div>
          <h4>Current</h4>
            <p className="current">{currLevel}</p>
        </div>
        <div>
          <h4>Previous</h4>  
            <p className="previous">{prevLevel}</p>
        </div>
      </div>
    );
}

export default CurPrev;
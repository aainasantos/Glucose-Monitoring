import React, { useState } from "react";
import History from "./History";

function HistoryList({history}) {
    const levelHistory = history;
    const [newFilter, setFilter] = useState("sort");

    const normal = levelHistory.filter(level => {
        return level < 5;
    });
    const abnormal = levelHistory.filter(level => {
        return (5 > level && level <7);
    });
    const dateNow = levelHistory.filter(level => {
        return level;
    });

    const none = levelHistory.filter(level => {
        return level= "";
    })

    function handleChange(e){
        const selectFilter = e.target.value;
        setFilter(selectFilter);
    }

    function handleChange2(e){
        const selectFilter = e.target.value;
        setFilter(selectFilter);
    }

    return(
        <div>
        <h3>History</h3>
        <select onChange={handleChange}>
          <option value="sort">Sort By</option>
          <option value="date">Date</option>
          <option value="normal">Normal</option>
          <option value="abNormal">AbNormal</option>
          <option value="all">All</option>
        </select>
        
       { newFilter === "date" ? <input type="date" onChange={handleChange2}></input> : ""} 
        {(newFilter === "normal"
        ? normal
        :newFilter === "abNormal"
        ? abnormal
        : newFilter=== "sort"
        ? none
        :dateNow).map(level => (<History history={level.value} historyDate ={level.date}/>))}
        
        <hr />
        </div>
        
    );
}

export default HistoryList;
import React from "react";
import Suggestion from "./Suggestion";

function Current({current, date, unit, time}) {
    let status;
    let setClass;
    if(unit === "mg" && time === "fasting"){
    if(current >= 70 && current <= 99){
            status = "Normal";
            setClass = "green"
        }else if(current >= 100 && current <= 125){
            status = "Prediabetes";
            setClass = "yellow"
        }else if(current >= 126){
            status = "T2 Diabetes";
            setClass = "red"
        }
    }else if(unit === "mg" && time === "post"){
        if(current <= 140){
                status = "Normal";
                setClass = "green"
            }else if(current >= 140 && current <= 199){
                status = "Prediabetes";
                setClass = "yellow"
            }else if(current >= 200){
                status = "T2 Diabetes";
                setClass = "red"
            }
    }else if(unit === "mm" && time === "fasting"){
        if(current >= 4 && current<= 6){
                status = "Normal";
                setClass = "green"
            }else if(current >= 6.1 && current <= 6.9){
                status = "Prediabetes";
                setClass = "yellow"
            }else if(current >= 7){
                status = "T2 Diabetes";
                setClass = "red"
                }
    }else if(unit === "mm" && time === "post"){
        if(current<= 7.8){
                status = "Normal";
                setClass = "green"
        }else if(current >= 7.9 && current <= 11){
                status = "Prediabetes";
                setClass = "yellow"
        }else if(current >= 11.1){
                status = "T2 Diabetes";
                setClass = "red"
         }
    }else{
        status="Sugar Level Status"
    }
    return (
        <div>
            <div className="status">
                <h3>Current Status</h3>
                <h4>{date}</h4>
                <h2 id="status" className={setClass}>{status}</h2>
            </div>
            <Suggestion currentStatus = {status}/>
        </div>

        
    );
}

export default Current;
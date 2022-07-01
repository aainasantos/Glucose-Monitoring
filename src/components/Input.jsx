import React, {useState} from "react";
import Button from '@mui/material/Button';

function Input(props){
    const today = new Date();
    const option = {year : "numeric", month: "numeric", day: "numeric"};
    const [level, newLevel] = useState({
        value: 0,
        date: today.toLocaleDateString("en-US", option),
        unit: "",
        time: ""
    });

    function handleChange(e){
        const {name, value} = e.target;
        newLevel((prevValue) => {
            if(name === "inputLevel"){
                return ({...prevValue,
                    value: value
                });
            }else if(name === "unit"){
                return ({ ...prevValue,
                    unit: value
                });
            }else if(name === "time"){
                return ({...prevValue,
                    time: value
                });
            }
        });
    }

    function handleClick(){
        props.onclick(level);
    }

    return (
        <div>
        <h3>Add Record Blood Sugar Level</h3>
        <h5>Select Unit and Time condition of testing</h5>
        <div className="inputOption" onChange={handleChange}>
            <select name="unit">
                <option value="unit">select unit</option>
                <option value="mg">mg/dL</option>
                <option value="mm">mmol/L</option>
            </select>
            <select name="time" onChange={handleChange}>
                <option value="time">Time of test</option>
                <option value="fasting">Empty Stomach</option>
                <option value="post">2hrs Post Meal</option>
            </select>
        </div>
        <h5>Blood Sugar Level</h5>
        <div className="inputForm">
            <div>
                <input name="inputLevel" onChange={handleChange}/>
            </div>
            <div>
            <Button variant="contained" component="span" onClick={handleClick}>
                Record And Check Sugar Level
            </Button> 
            </div>            
        </div>            
        </div>
    );
}

export default Input;
import React, { useState } from "react";
import './App.css';
import Header from "./components/Header.jsx";
import Current from "./components/Current";
import CurPrev from "./components/currentPrevious";
import Input from "./components/Input";
import HistoryList from "./components/HistoryList";


function App() {
  const [levels, setLevel] = useState([]);
  const [inputLevel, currentLevel] = useState([0, 0]);
  const [measurement, setUnit] = useState("");
  const [testTime, setTime] = useState("");
  

  function handleClick(level){
    setLevel(prevValue => {
      return (
        [...prevValue, level]
      )
    });
    currentLevel(prevValue => {
      return (
        [...prevValue, level.value]
      )
    });
    setUnit(level.unit);
    setTime(level.time)
    let c = document.getElementById("status").innerHTML;
    console.log(c);
}


  return (
    <div className="container">
      <Header />
      <div>
      <Current current={inputLevel[inputLevel.length-1]} date={inputLevel.date} unit={measurement} time={testTime}/>
      <CurPrev currLevel={inputLevel[inputLevel.length-1]} prevLevel={inputLevel[inputLevel.length-2]}/>
      <HistoryList history={levels} />  
      <Input onclick={handleClick}/>
      </div>
    </div>    
  );
}

export default App;

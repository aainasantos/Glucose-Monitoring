import React, { useState } from "react";

function Suggestion({currentStatus}) {
    return (
        <div id="suggestion">
            <h3>Diet Suggestion</h3>
            {currentStatus === "Prediabetes"
            ?  <div> <p>Your diet is important, and you need to know the right kind of foods to eat.</p>
            <a href="https://www.healthline.com/health/diabetes/prediabetes-diet">click this link to plan your diet</a></div>
            : currentStatus === "T2 Diabetes"
            ?<div> <p>In turn, if your meal plan helps you achieve a healthier weight for your body and keep your blood sugar levels in your target range,.</p>
            <a href="https://www.healthline.com/health/type-2-diabetes/best-meal-plans">click this link to plan your diet</a></div>
            : ""
            }
            <hr/>
        </div>
    );
}

export default Suggestion;
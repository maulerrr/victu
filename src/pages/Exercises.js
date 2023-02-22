import React from "react";
import Exercise from "../components/UI/exercise/Exercise";
import {apiData} from "../helpers/getExercises";

console.log("Saved data from api: " + apiData)

function ExercisesPage() {
    const fallback = JSON.parse(localStorage.getItem("exercises"))
    console.log("Fallback: " + fallback)

    if (apiData == null) {
        return (
            <div className="Exercises">
            {fallback.map((exercise, index) => {
                return <Exercise exercise={exercise} key={index}/>
            })}
            </div>
        );
    } else {
        return (
            <div className="Exercises">
                {apiData.map((exercise, index) => {
                    return <Exercise exercise={exercise} key={index}/>
                })}
            </div>
        );
    }
}

export default ExercisesPage;

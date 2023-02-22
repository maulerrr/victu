import React from "react";
import classes from "./Exercise.module.css";

function Exercise(props){
    return(
        <div className={classes.exerciseWrapper}>
            <div className={classes.textWrapper}>
                <h3>Exercise: </h3>
                <p>{props.exercise.name}</p>
            </div>
            <img alt="exercise" src={props.exercise.gifUrl}/>
            <div className={classes.textWrapper}>
                <h3>Target muscles: </h3>
                <p>{props.exercise.bodyPart}</p>
            </div>
        </div>
    )
}

export default Exercise;
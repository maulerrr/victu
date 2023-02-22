import React from "react";
import classes from "./Tip.module.css";

function Tip(props){
    return (
        <div className={classes.tipWrapper}>
            {/*<img src='images/logo.svg'/>*/}
            <h1 className={classes.TipHeader}>{props.tip.header}</h1>
            <p>{props.tip.body}</p>
        </div>
    )
}

export default Tip;
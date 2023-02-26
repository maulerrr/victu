import React from 'react'
import classes from './BlockBl.module.css'

function BlockBl() {
  return (
    <div className={classes.blockWrapper}>
        <div className={classes.imageWrapper}>
            <img src='images/eating.svg'/>
        </div>
        <div className={classes.textWrapper}>
            <h1 className={classes.mainText}>Victu gives you</h1>
            <h3 className={classes.secondaryText}>
                1 exercise program
            </h3>
            <h3 className={classes.secondaryText}>
                2 useful tips
            </h3>
        </div>
        
    </div>
  )
}

export default BlockBl
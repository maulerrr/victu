import React from 'react'
import classes from './BlockBr.module.css'


function BlockBr() {
  return (
    <div className={classes.blockWrapper}>
        <div className={classes.textWrapper}>
            <h1 className={classes.mainText}>About Victu</h1>
            <h3 className={classes.secondaryText}>
            Free web-application to assist enhancing your well-being.
            </h3>
        </div>        
        <div className={classes.imageWrapper}>
            <img src='images/eating2.svg'></img>
        </div>
    </div>
  )
}

export default BlockBr
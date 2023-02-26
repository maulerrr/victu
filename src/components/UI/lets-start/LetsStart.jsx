import React from 'react'
import classes from './LetsStart.module.css'

export default function LetsStart() {
  return (
    <div className={classes.actionContainer}>
        <div className={classes.actionText}>
            <p className={classes.mainText}>
              Let food be thy medicine and medicine be thy food
            </p>
            <p className={classes.secondaryText}>
            Control your daily eating manner, get some healthy habits.
            </p>
        </div>
        <div className={classes.actionBtnWrapper}>
            <a className={classes.actionBtn} href='/personal'>
                <h1>Let's start your healthy journey!</h1>
                <img src='images/arrow.svg' className={classes.arrow} ></img>
            </a>
        </div>
    </div>
  )
}

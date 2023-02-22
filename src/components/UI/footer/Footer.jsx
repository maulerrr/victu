import React from 'react'
import classes from './Footer.module.css'

export default function Footer() {
  return (
    <div className={classes.footerWrapper}>
        <img className={classes.footerLogo} src='images/logo.svg'></img>
        <p className={classes.footerText}>Victu ©2023 Created by Z069</p>
    </div>
  )
}

import React from 'react'
import classes from './Navbar.module.css'

export default function navbar() {
  return (
    <div className={classes.navContainer}>
            <div className={classes.logoContainer}>
                <img className={classes.logo} src="images/logo.svg" alt="Logo"/>
            </div>

            <div className={classes.btns}>
                <a className={classes.navBtn} href='/'>Home</a>
                <a className={classes.navBtn} href='/tips'>Tips</a>
                <a className={classes.navBtn} href='/exercise'>Exercises</a>
                <a className={classes.navBtn} href='/program'>Program</a>
            </div>
            <div className={classes.dropdownWrapper}>
                <a className={classes.dropdownBtn} href='/personal'>
                    Metrica
                </a>
            </div>
    </div>
  )
}

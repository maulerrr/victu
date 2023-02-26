import classes from './Form.module.css';

import React from 'react'

export default function Form({children, ...props}) {
  return (
    <div className={classes.formContainer}>
        <form className={classes.bmiForm}>
            <h1>Let's calculate your daily goal</h1>

            <label for="height">Enter your height</label>
            <input id = "height" className={classes.bmiInput}/>

            <label for="weight">Enter your weight</label>
            <input id = "weight" className={classes.bmiInput}/>

            <input type="date" name="startDate" className={classes.bmiInput}/>
            <input type="date" name="finishDate" className={classes.bmiInput}/>

            <label htmlFor="goalWeight">Enter your Goal Weight</label>
            <input id="goalWeight" name="goalWeight" className={classes.bmiInput}/>


            <fieldset data-role="gender">
                <legend>Choose your gender:</legend>
                <label htmlFor="male">Male</label>
                <input type="radio" name="gender" id="male" value="male" checked/>
                <label htmlFor="female">Female</label>
                <input type="radio" name="gender" id="female" value="female"/>
            </fieldset>

            <fieldset data-role="activity">
                <legend>Choose your activity level:</legend>
                <label htmlFor="sedentary">Sedentary</label>
                <input type="radio" name="sedentary" id="sedentary" value="sedentary" checked/>
                <label htmlFor="light">Light</label>
                <input type="radio" name="light" id="light" value="light"/>
                <label htmlFor="moderate">Moderate</label>
                <input type="radio" name="moderate" id="moderate" value="moderate"/>
            </fieldset>

            <button type = "submit" className={classes.bmiBtn}>
                Calculate
            </button>
        </form>    
    </div>
  )
}

import React, { useEffect, useState } from "react";
import classes from "./Metrica.module.css"
import axios from "axios";

const redirect = () => {
  window.location.href = '/personal'
}

function Metrica() {
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [desiredWeight, setDesiredWeight] = useState(0)
  const [age, setAge] = useState(0)
  const [startDate, setStartDate] = useState(Date.now())
  const [finishDate, setFinishDate] = useState(Date.now())
  const [activityName, setActivityName] = useState("")
  const [gender, setGender] = useState("")

  async function getActivities(){
    const options = {
      method: "GET",
      url: "https://victu-api.up.railway.app/api/v1/activity"
    };

    await axios.request(options).then(function(response) {
      const activities = response.data;
      const activity = activities.find((activity) => {
        return activity.value === activityName;
      });

      localStorage.setItem("activity", JSON.stringify(activity));
    }).catch(function(error) {
      console.error(error);
    });
  }

  const HandleSubmit = async (e) =>{
    e.preventDefault()

    await getActivities()

    const options = {
      method: 'POST',
      url: 'https://victu-api.up.railway.app/api/v1/metrics',
      body: {
        "age": parseInt(age),
        "gender": gender,
        "height": parseFloat(height),
        "weight": parseFloat(weight),
        "goalWeight": parseFloat(desiredWeight),
        "startDate": (startDate),
        "finishDate": (finishDate),
        "activityId": JSON.parse(localStorage.getItem("activity"))._id,
        "userId": localStorage.getItem("ID")
      }
    };
    console.log(options.body);

    try {
      console.log("trying to POST /api/v1/metrics");

      const response = await axios.post(options.url,
        JSON.stringify(options.body),
        {
          headers: { "Content-Type": "application/json" },
          body: options.body
        }
      )

      console.log(response.data);
      redirect()

    } catch (err) {
      if (!err?.response){
        console.log("No response from a server");
      } else
        console.log("Another error!");
    }
  }

  return (
    <form onSubmit={HandleSubmit}>
    <div className={classes.MetricaWrapper}>
      <h1 className={classes.Header}>Let's calculate your daily goal!</h1>

      <div className={classes.InputBody}>
        <div className={classes.MainDetails}>
          <label htmlFor="height">Enter your height</label>
          <input type="number" name="height"
                 onChange={(e) => setHeight(e.target.value)}/>

          <label htmlFor="weight">Enter your weight</label>
          <input type="number" name="weight"
                 onChange={(e) => setWeight(e.target.value)}/>

          <label htmlFor="goalWeight">Enter your goal weight</label>
          <input type="number" name="goalWeight"
                 onChange={(e) => setDesiredWeight(e.target.value)}/>

          <label htmlFor="age">Enter your age</label>
          <input type="number" name="age"
                 onChange={(e) => setAge(e.target.value)}/>
        </div>
        <div className={classes.SecondaryDetails}>
          <div className={classes.Dates}>
            <label htmlFor="startDate">Starting date</label>
            <input type="date" name="startDate" className={classes.Input}
                   onChange={(e) => setStartDate(e.target.value)}/>

            <label htmlFor="finishDate">Finish date </label>
            <input type="date" name="finishDate" className={classes.Input}
                   onChange={(e) => setFinishDate(e.target.value)}/>
          </div>
          <div className={classes.GenderAndActivity}>
            <div className={classes.Activity}>
              <label>Choose your activity level:</label>
              <label className={classes.Container}>Sedentary
                <input type="radio" name="activity" value={"Sedentary"}
                       onChange={(e) => setActivityName(e.target.value)}/>
                <span className={classes.checkmark}/>
              </label>
              <label className={classes.Container}>Light
                <input type="radio" name="activity" value={"Light"}
                       onChange={(e) => setActivityName(e.target.value)}/>
                <span className={classes.checkmark}/>
              </label>
              <label className={classes.Container}>Moderate
                <input type="radio" name="activity" value={"Moderate"}
                       onChange={(e) => setActivityName(e.target.value)}/>
                <span className={classes.checkmark}/>
              </label>
            </div>
            <div className={classes.Gender}>
              <label>Choose your gender:</label>
              <label className={classes.Container}>Female
                <input type="radio" name="gender" value={"female"}
                       onChange={(e) => setGender(e.target.value)}/>
                <span className={classes.checkmark}/>
              </label>
              <label className={classes.Container}>Male
                <input type="radio" name="gender" value={"male"}
                       onChange={(e) => setGender(e.target.value)}/>
                <span className={classes.checkmark}/>
              </label>
            </div>
          </div>
        </div>
      </div>
      <button type="submit" className={classes.SubmitBtn}>Submit</button>
    </div>
    </form>
  )
}

export default Metrica;

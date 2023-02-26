import React, { useState } from "react";
import classes from "./Registration.module.css";
import axios from "axios";

const redirect = () => {
    window.location.href = '/personal'
}

function Registration(...props){
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const HandleSubmit = async (e) =>{
        e.preventDefault()

        console.log("*name: " + name + " | @email: " + email + " | #pwd: "+ password);

        const options = {
            method: 'POST',
            url: 'https://victu-api.up.railway.app/api/v1/auth/signup',
            body: {
                "name": name,
                "email": email,
                "password": password
            }
        };

        try {
            console.log("trying to POST /auth/signup");

            const response = await axios.post(options.url,
              JSON.stringify({name, email, password}),
              {
                  headers: { "Content-Type": "application/json" },
                  body: options.body
              }
            )

            console.log(response.data);

            const token = response.data.token
            const ID = response.data.id
            localStorage.setItem("ID", ID)
            localStorage.setItem("token", token)

            if (token){
                redirect()
            }

            setName('')
            setEmail('')
            setPassword('')
        } catch (err) {
            if (!err?.response){
                console.log("No response from a server");
            } else
                console.log("Another error!");
        }
    }



    return (
        <div className={classes.regWrapper}>
            <form onSubmit={HandleSubmit}>
                <label for="username">Username</label>
                <input className={classes.AuthInput} type="text" name="username"
                   onChange={(e) => {
                       setName(e.target.value);
                       console.log(name);
                   }}/>

                <label for="email">Email</label>
                <input className={classes.AuthInput} type="email" name="email"
                   onChange={(e) => {
                       setEmail(e.target.value);
                       console.log(email);
                   }}/>

                <label for="password">Password</label>
                <input className={classes.AuthInput} type="password" name="password"
                   onChange={(e) => {
                       setPassword(e.target.value);
                       console.log(password);
                   }}/>

                <div className={classes.SignIN}>
                    <p className={classes.Text}>Already have an account? &nbsp;</p>
                    <a href={"/log"} className={classes.Link}>Sign In</a>
                </div>

                <input  className={classes.btn} type="submit" name="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default Registration
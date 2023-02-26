import React, { useEffect, useState } from "react";
import Metrica from "../components/UI/metrica/Metrica";
import axios from "axios";
import UserDetails from "../components/UI/userDetails/UserDetails";
import getMyData from "../helpers/getMyData"
import getMyProgram from "../helpers/getMyProgram"
import getActivities from "../helpers/getActivities";

const redirect = () => {
  window.location.href = '/log'
}

function PersonalPage() {

  getActivities().then(r => {
    console.log("Got activities");
  });

  // const getMyData = async () => {
  //   const ID = localStorage.getItem("ID");
  //   const options = {
  //     method: "GET",
  //     url: "http://localhost:3001/api/v1/users"
  //   };
  //
  //   await axios.request(options).then(function(response) {
  //     const users = response.data;
  //     const me = users.find((user) => {
  //       return user._id === ID;
  //     });
  //
  //     localStorage.setItem("me", JSON.stringify(me));
  //   }).catch(function(error) {
  //     console.error(error);
  //   });
  // };
  //
  // const getMyProgram = async () => {
  //   const ID = localStorage.getItem("ID");
  //
  //   const options = {
  //     method: "GET",
  //     url: "http://localhost:3001/api/v1/program/user/" + ID
  //   };
  //
  //   await axios.request(options).then(function(response) {
  //     console.log(response.data);
  //     const program = response.data;
  //     localStorage.setItem("program", JSON.stringify(program));
  //   });
  // };

  window.onload = (async (e) => {
    if (localStorage.getItem("token")) {
      await getMyData();
      await getActivities();
      if (JSON.parse(localStorage.getItem("me")).metrics) {
        await getMyProgram();
        if (!(JSON.parse(localStorage.getItem("me")).program._id === JSON.parse(localStorage.getItem("program"))._id)){
          await getMyProgram()
        }
      }
    } else {
      return redirect();
    }
  });

  return (
    <div className="App">
      <Metrica />
    </div>
  );
}

export default PersonalPage;

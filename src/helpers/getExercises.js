import axios from "axios";

const options = {
    method: "GET",
    url: "https://victu-api.up.railway.app/api/v1/exercises",
};

if(!localStorage.getItem("me")){
    axios.request(options).then(function(response) {
        console.log(response.data);
        // apiData = response.data.slice(0, 3);

        const shuffled = response.data.sort(() => 0.5 - Math.random());
        apiData = shuffled.slice(0, 3);

        localStorage.setItem("exercises", JSON.stringify(apiData));
        console.log("data being set: " + apiData);
    }).catch(function(error) {
        console.error(error);
    });
}


export var apiData;



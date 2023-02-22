import axios from "axios";

const getActivities = async () => {
  const options = {
    method: "GET",
    url: "https://victu-api.up.railway.app/api/v1/activity"
  };

  await axios.request(options).then(function(response) {
    const activities = response.data;
    localStorage.setItem("activities", JSON.stringify(activities));
  }).catch(function(error) {
    console.error(error);
  });
}

export default getActivities;
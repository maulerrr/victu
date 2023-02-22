import axios from "axios";

const getMyData = async () => {
  const ID = localStorage.getItem("ID");
  const options = {
    method: "GET",
    url: "https://victu-api.up.railway.app/api/v1/users"
  };

  await axios.request(options).then(function(response) {
    const users = response.data;
    const me = users.find((user) => {
      return user._id === ID;
    });

    localStorage.setItem("me", JSON.stringify(me));
  }).catch(function(error) {
    console.error(error);
  });
};

export default getMyData;
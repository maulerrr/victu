import axios from "axios";

const getMyProgram = async () => {
  const ID = localStorage.getItem("ID");

  const options = {
    method: "GET",
    url: "https://victu-api.up.railway.app/api/v1/program/user/" + ID
  };

  await axios.request(options).then(function(response) {
    console.log(response.data);
    const program = response.data;
    localStorage.setItem("program", JSON.stringify(program));
  });
};

export default getMyProgram;
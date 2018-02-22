import axios from "axios";

export default {
  user: {
    login: credentials =>
      axios
        .post("http://localhost:8080/api/auth", { credentials })
        .then(res => {
          console.log("Im the api. Here the res: ", res);
          return res.data.user;
        }),
    signUp: user =>
      axios.post("http://localhost:8080/api/users", { user }).then(res => {
        console.log("Im the api. Here the res: ", res);
        return res.data.user;
      })
  }
};

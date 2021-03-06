import api from "../api";
import { userLoggedIn } from "./auth";

export const signUp = data => dispatch =>
  api.user.signUp(data).then(user => {
    localStorage.percyJWT = user.token;
    dispatch(userLoggedIn(user));
  });

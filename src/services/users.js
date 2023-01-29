import axios from "axios";

export const getUserInfo = (login) => {
  return axios.get(
    `https://api.github.com/users/${login}`
  )
};

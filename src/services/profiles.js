import axios from "axios";

export const searchProfiles = (search) => {
  return axios.get(
    "https://api.github.com/search/users",
    {
      params: {
        q: search,
        per_page: 18
      }
    }
  )
};

import React, { useContext, useEffect, useState } from "react";
import ProfileItem from "./ProfileItem";
import AppContext from "../store/context";
import { searchProfiles } from "../services/profiles";
import "../styles/listProfiles.scss";

const ListProfiles = () => {
  const { state } = useContext(AppContext);
  const [list, setList] = useState([]);

  useEffect(() => {
    if (state.search_value) {
      searchProfiles(state.search_value).then(
        (res) => {
          setList(res.data.items);
        },
        (error) => {
          console.error("Error: ", error);
        }
      )
    }
  }, [state.search_value]);

  return (
    <div className="list-container">
      <div className="list-content">
        {list.map((profile) => (
          <ProfileItem
            key={profile.id}
            profile={profile}
          />
        ))}
      </div>
    </div>
  )
}

export default ListProfiles;
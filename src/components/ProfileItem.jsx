import React, { useState, useEffect } from "react";
import { getUserInfo } from "../services/users";
import "../styles/profileItem.scss";

const ProfileItem = ({ profile }) => {
  const [info, setInfo] = useState(null);

  // useEffect(() => {
  //   if (profile.login) {
  //     getUserInfo(profile.login).then(
  //       (res) => {
  //         setInfo(res.data);
  //       },
  //       (error) => {
  //         console.error("Error profile ", profile.login, ": ", error);
  //       }
  //     )
  //   }
  // }, [])

  return (
    <div className="profile-container">
      <div className="profile-avatar">
        <img src={profile.avatar_url} alt={profile.login} /> 
      </div>
      <div className="profile-details">
        <div className="profile-details-name">{profile.login}</div>
      </div>
    </div>
  )
};

export default ProfileItem;

import React, { useState, useEffect } from "react";
import { getUserInfo } from "../services/users";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faUserGroup, faUserPlus, faBookBookmark } from "@fortawesome/free-solid-svg-icons";
import "../styles/profileItem.scss";

const ProfileItem = ({ profile }) => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    if (profile.login) {
      getUserInfo(profile.login).then(
        (res) => {
          setInfo(res.data);
        },
        (error) => {
          console.error("Error profile ", profile.login, ": ", error);
        }
      )
    }
  }, []);

  const handleSocialMedia = (url) => {
    if (url) {
      window.open(url, "__blanck");
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-content">
        <div className="profile-avatar">
          <img src={profile.avatar_url} alt={profile.login} />
        </div>
        <div className="profile-details">
          <div className="profile-details-header">
            <div className="profile-name">{profile.login}</div>
            <div className="profile-location">
              <FontAwesomeIcon icon={faLocationDot} className="profile-location-icon" />
              <span className="profile-location-text">{info?.location ?? "--"}</span>
            </div>
          </div>
          <div className="profile-details-content">
            <div className="profile-details-content-item">
              <div className="profile-followers">
                <FontAwesomeIcon icon={faUserGroup} className="profile-content-icon" />
                <span className="profile-content-text">{info?.followers ?? "0"}</span>
              </div>
              <div className="profile-following">
                <FontAwesomeIcon icon={faUserPlus} className="profile-content-icon" />
                <span className="profile-content-text">{info?.following ?? "0"}</span>
              </div>
            </div>
            <div className="profile-content-item">
              <FontAwesomeIcon icon={faBookBookmark} className="profile-content-icon" />
              <span className="profile-content-text">{info?.public_repos ?? "0"}</span>
            </div>
          </div>
          <div className="profile-social-media">
            {profile?.html_url && (
              <FontAwesomeIcon
                icon={faGithub}
                className="profile-social-media-icon"
                onClick={() => handleSocialMedia(profile.html_url)}
              />
            )}
            {info?.twitter_username && (
              <FontAwesomeIcon
                icon={faTwitter}
                className="profile-social-media-icon twitter-icon"
                onClick={() => handleSocialMedia(`https://twitter.com/${info.twitter_username}`)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileItem;

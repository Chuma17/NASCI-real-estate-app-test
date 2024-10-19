import React, { useState } from "react";
import ProfileImg from "./profile.png";
import { ReactSVG } from "react-svg";
import DownArrow from "../../assets/arrow-down.svg";
import { useUserAuth } from "src/context/authProvider";

export default function Profile() {
  const { user, logOut } = useUserAuth();
  const [activeState, setActiveState] = useState(false);

  const handleActive = () => {
    setActiveState(!activeState);
  };

  const signOut = () => {
    logOut();
  };
  return (
    <>
      <li onClick={handleActive} className="profile-component">
        <img src={ProfileImg} alt="Profile" />
        <div className="profile-details">
          <span>{user?.displayName}</span>
          <br />
          <span>{user?.email}</span>
        </div>
        <ReactSVG
          beforeInjection={(svg) => {
            svg.classList.add("profile-drop-down");
          }}
          src={DownArrow}
        />
      </li>
      {activeState ? (
        <li onClick={signOut} className="profile-component-sign-out">
          Sign Out
        </li>
      ) : (
        ""
      )}
    </>
  );
}

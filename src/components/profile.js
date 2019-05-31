import React from "react";

const profile = props => {
  console.log(props);
  return (
    <div className="app">
      <div className="Card">
        <img
          src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
          className="ProfilePic"
        />
        <div className="Name">Name</div>
        <div className="Description">short desc.</div>
        <button className="WeebMasterButton">view</button>
      </div>
    </div>
  );
};

export default profile;

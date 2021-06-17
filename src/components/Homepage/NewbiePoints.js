import React from "react";

const NewbiePoints = ({ imgLink, newbieTitle, newbieBody }) => {
  return (
    <div className="newbiepoints" style={{padding: 20}}>
      <div className="newbie-img">
        <img src={`${imgLink}`} alt={newbieTitle} style={{borderRadius: 20}}/>
      </div>
      <div className="newbie-text">
        <h3 class="newbie-title">{newbieTitle}</h3>
        <p class="newbie-body"><b>{newbieBody}</b></p>
      </div>
    </div>
  );
};

export default NewbiePoints;

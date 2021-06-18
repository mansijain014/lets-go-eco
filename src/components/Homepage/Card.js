import React from "react";
import CTA from "./CTA";
const Card = ({ cardTitle, cardDes, onTryNowClick}) => {
  return (
    <div className="card">
      <h4 className="cardtitle">{cardTitle}</h4>
      <p className="carddes"><b>{cardDes}</b></p>
      <CTA icon="arrow" text="Let's Go" onClick={onTryNowClick}/>
    </div>
  );
};

export default Card;
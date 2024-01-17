import React from "react";

export const FishFriendCard = ({ name, role, img, description }) => (
  <div className="fish-friend-card">
    <img src={img} alt={`${name} fish`} />
    <h3>{name}</h3>
    <p>{role}</p>
    <p>{description}</p>
  </div>
);

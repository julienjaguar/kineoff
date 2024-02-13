import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import okImage from "../../src/assets/img/ok.png";
import "./Navbar.css";
const Newsletter = () => {
  return (
    <div
      className="bg"
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "1rem",
      }}
    >
      <img className="image" src={okImage} alt="OK" />
    </div>
  );
};

export default Newsletter;

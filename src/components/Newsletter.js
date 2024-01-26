import { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import contactImg from "../assets/img/tax.png";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  const clearFields = () => {
    setEmail("");
  };

return (
  <div className="">
    <img
      src={contactImg}
      alt="Tax Image"
      style={{
        width: "100%",
        height: "auto", // Set height to auto for responsive scaling
        marginLeft: "1rem",
        backgroundColor: "#141313",
        marginTop: "3rem", // Margin top of 3rem
      }}
      className="newsletter-image" // Add a class for styling in CSS
    />

    <div style={{ display: "flex", alignItems: "center", marginTop: "1rem" }}>
      <a href="https://t.me/bonkbot_bot?start=ref_rf2ot" target="_blank" rel="noopener noreferrer">
        🐶 BonkBot
      </a>
      <a href="https://t.me/SolanaTradingBot?start=aN4Dgdagf" style={{ margin: "0 1rem" }} target="_blank" rel="noopener noreferrer">
        🟣 SolTdBot
      </a>
      <a href="https://t.me/solana_unibot?start=r-frankdoggydogg" target="_blank" rel="noopener noreferrer">
        🦄 UniBot
      </a>
    </div>
  </div>
);


};

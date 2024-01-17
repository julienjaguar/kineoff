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
          backgroundColor: "black",
        }}
        className="newsletter-image" // Add a class for styling in CSS
      />
    </div>
  );
};

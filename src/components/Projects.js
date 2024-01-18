import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import fishImage from "../assets/img/1.png";
import fishImage2 from "../assets/img/logo.png";
import fishImage3 from "../assets/img/10.png";
import fishImage4 from "../assets/img/4.png";
import fishImage5 from "../assets/img/5.png";
import fishImage6 from "../assets/img/6.png";
import "animate.css";
import "./Projects.css";

export const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedFish, setSelectedFish] = useState(null);

  const fishFriends = [
    {
      name: "KINE",
      role: "CEO of KINE ",
      img: fishImage,
      description: "CEO of KINE",
    },
    {
      name: "Sbob",
      role: "UI/UX DESIGNER",
      img: fishImage2,
      description: "UI/UX DESIGNER",
    },
    {
      name: "Hal",
      role: "SOLIDITY/PYTHON DEVELOPER",
      img: fishImage3,
      description: "SOLIDITY/PYTHON DEVELOPER",
    },
    {
      name: "Finn",
      role: "MARKETING MANAGER",
      img: fishImage4,
      description: "MARKETING MANAGER",
    },
    {
      name: "Bubbles",
      role: "COMMUNITY MANAGER",
      img: fishImage5,
      description: "COMMUNITY MANAGER",
    },
    {
      name: "Splash",
      role: "MARKETING ADVISOR ",
      img: fishImage6,
      description: "MARKETING ADVISOR",
    },
    // Add more fishFriends as needed
  ];

  const handleFishClick = (fish) => {
    setSelectedFish(fish);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container>
      <Row>
        {fishFriends.map((fish, index) => (
          <Col md={4} key={index}>
            <div
              className="fish-container"
              onClick={() => handleFishClick(fish)}
            >
              <div className="fish-image-container">
                {/* Fix: Change fish.imgUrl to fish.img */}
                <img src={fish.img} alt={fish.name} className="fish-image" />
              </div>
              <div className="fish-info">
                <h3>{fish.name}</h3>
                <p>{fish.description}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

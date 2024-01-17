import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import fishImage4 from "../assets/img/4.png";
import fishImage5 from "../assets/img/logo.png";
import fishImage6 from "../assets/img/6.png";
import fishImage8 from "../assets/img/10.png";
import fishImage9 from "../assets/img/11.png";

import "animate.css";
import "./Projects.css";

export const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedFish, setSelectedFish] = useState(null);

  const fishFriends = [
    {
      name: "KINE",
      role: "Curious Swimmer",
      imgUrl: fishImage5,
      description:
        "Kine has a curious nature, always seeking new wonders in the sea alongside Kine.",
    },
    {
      name: "BUBBLES",
      role: "Cheerful Explorer",
      imgUrl: fishImage4,
      description:
        "Bubbles loves exploring with Kine, bringing joy and laughter to the underwater journey.",
    },
    {
      name: "ASTRO",
      role: "Curious Swimmer",
      imgUrl: fishImage5,
      description:
        "Astro has a curious nature, always seeking new wonders in the sea alongside Kine.",
    },

    {
      name: "SBOB",
      role: "Loyal Mate",
      imgUrl: fishImage6,
      description:
        "Sbob is a loyal mate of Kine, supporting him and Kirby in their moon-bound adventure.",
    },
    {
      name: "CORAL",
      role: "Artistic Dreamer",
      imgUrl: fishImage8,
      description:
        "Coral is an artistic dreamer, creating beauty beneath the waves and finding inspiration in the endless wonders of the sea.",
    },
    {
      name: "FINN",
      role: "Adventurous Voyager",
      imgUrl: fishImage9,
      description:
        "Finn is an adventurous voyager, exploring uncharted territories with Kine's crew, seeking the thrill of the unknown in their eternal journey.",
    },
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
                <img src={fish.imgUrl} alt={fish.name} className="fish-image" />
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

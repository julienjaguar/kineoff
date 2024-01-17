import React, { useState, useEffect } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import TrackVisibility from "react-on-screen";
import "./Projects.css";
import headerImg from "../assets/img/logo.png"; //
import "animate.css";
export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const toRotate = ["SWIMMING TO THE MOON", "EXPLORE THE OCEANIC ADVENTURE"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to KINE AREA</span>
                  <h1>
                    {`Swim with KINE `}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Exploring the Deep", "Finding New Friends", "Secure and Joyful Journeys" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <button onClick={handleShowModal}>
                    Dive & Explore <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="KINE Fish Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      {/* Fish Modal */}
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Once Upon a Time...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{ color: "black", fontWeight: "bold", marginTop: "3rem" }}>
            Once upon a time, in the vast and enchanting underwater world, there
            lived a sparkling star named Kirby. Kirby was not just an ordinary
            star; he was renowned as the "Star of the Sea." His gleaming light
            captivated the ocean depths, making him a symbol of hope and
            curiosity for all the marine life.
          </p>
          <p style={{ color: "black", fontWeight: "bold" }}>
            Close to Kirby's heart was his best fish friend, Kine. Kine was a
            loyal companion, always by Kirby's side, sharing in the excitement
            of every underwater adventure. Together, they swam through coral
            reefs, danced among seaweed gardens, and explored mysterious
            underwater caves.
          </p>
          <p style={{ color: "black", fontWeight: "bold" }}>
            As Kirby and Kine delved deeper into the sea, they encountered Finn,
            an adventurous fish always ready for a challenge. Finn quickly
            became an inseparable part of their underwater trio, bringing a
            sense of thrill and enthusiasm to their escapades.
          </p>
          <p style={{ color: "black", fontWeight: "bold" }}>
            Bubbles, a cheerful explorer with a bubbly personality, joined the
            group, spreading joy and laughter wherever they went. With Bubbles
            around, every journey felt like a celebration, filled with the
            echoes of laughter that resonated through the ocean depths.
          </p>
          <p style={{ color: "black", fontWeight: "bold" }}>
            Splash, a curious swimmer, was next to join the group. Always
            seeking new wonders in the sea, Splash brought a sense of awe and
            discovery to the team. Together, they uncovered hidden treasures and
            explored the wonders of the ocean floor.
          </p>
          <p style={{ color: "black", fontWeight: "bold" }}>
            Gill, a loyal mate, supported Kirby and his friends in their
            moon-bound adventure. Gill's steadfast commitment and camaraderie
            strengthened the bonds of the group, making their journey even more
            memorable.
          </p>
          {/* Add the rest of the fishFriends array here */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

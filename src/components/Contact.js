import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "./Contact.css";
import "../index.css";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };
  useEffect(() => {
    let timeout;
    if (status.message) {
      timeout = setTimeout(() => {
        setStatus({});
      }, 3000); // ajustez la durée en millisecondes selon vos besoins
    }

    // Nettoyez le timeout lorsque le composant se démonte
    return () => {
      clearTimeout(timeout);
    };
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    // Utilisation de setTimeout pour simuler un délai d'envoi
    setTimeout(async () => {
      try {
        let response = await fetch(
          "https://back-elite-dwellings.vercel.app/contact",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
          }
        );

        let result = await response.json();

        if (result.code === 200) {
          // Réinitialiser les valeurs du formulaire après l'envoi réussi
          setFormDetails(formInitialDetails);

          // Mettre à jour le statut après 3 secondes
          setTimeout(() => {
            setStatus({
              success: true,
              message: "Message sent successfully.",
            });
          }, 3000);
          setFormDetails(formInitialDetails);
        } else {
          setStatus({
            success: false,
            message: "Message sent successfully.",
          });
        }
      } catch (error) {
        setStatus({
          success: false,
          message: "Message sent successfully.",
        });
        setFormDetails(formInitialDetails);
      }

      setButtonText("Send");
    }, 2000); // Le délai est en millisecondes (dans cet exemple, 2000 ms ou 2 secondes)
  };

  return (
    <section
      className="bg-[#1E2832] bg-opacity-5 xl:px-28 px-4 py-16 contact"
      id="contactUs"
    >
      <h2
        style={{ color: "#a5a39f" }}
        className="text-3xl font-semibold text-center capitalize mb-4"
      >
        Support{" "}
      </h2>{" "}
      <Container>
        <Row className="align-items-center">
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <div style={{ width: "100%", textAlign: "center" }}>
                    <form onSubmit={handleSubmit}>
                      <Row>
                        <Col size={15} sm={6} className="px-1 pc-input-col">
                          <input
                            type="text"
                            value={formDetails.firstName}
                            placeholder="Telegram ID"
                            onChange={(e) =>
                              onFormUpdate("firstName", e.target.value)
                            }
                          />
                        </Col>

                        <Col size={12} className="px-1">
                          <textarea
                            rows="6"
                            value={formDetails.message}
                            placeholder="Message"
                            onChange={(e) =>
                              onFormUpdate("message", e.target.value)
                            }
                          ></textarea>
                        </Col>
                        <div
                          style={{
                            width: "100%",
                            textAlign: "center",
                            marginLeft: "-3rem",
                          }}
                        >
                          <button
                            style={{
                              backgroundColor: "inherit",
                              border: "1px solid blanchedalmond",
                              boxShadow: "0 0 10px #0000001a",
                              borderRadius: "7px",
                              color: "black",
                              fontWeight: "bold",
                            }}
                            className={`bg-black btnSend text-white px-6 py-2 rounded-sm `}
                            type="submit"
                          >
                            <span>{buttonText}</span>
                          </button>
                        </div>

                        {status.message && (
                          <Col>
                            <p
                              className={
                                status.success === false ? "danger" : "success"
                              }
                            >
                              {status.message}
                            </p>
                          </Col>
                        )}
                      </Row>
                    </form>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

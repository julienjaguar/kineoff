import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import Newsletter from "./components/Newsletter";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <h1 style={{ marginTop: "2rem", textAlign: "center", color: "#dda9a9" }}>
        <strong style={{ color: "white" }}>$SELENE</strong> is changing the
        game! Join us in our journey to the moon 🚀 🌕
      </h1>

      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <a
          href="https://twitter.com/votrecomptetwitter"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <h1 style={{ marginTop: "2rem" }}>CLICK BELOW TO JOIN US</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginRight: "2rem",
              marginTop: "2rem",
            }}
          >
            <div style={{ display: "flex", gap: "30px" }}>
              <FontAwesomeIcon icon={faTwitter} size="2x" />
              <FontAwesomeIcon icon={faTelegram} size="2x" />
            </div>
          </div>
        </a>
      </div>

      <Newsletter />

      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h1>ca : Fpo9ZnVN3FfjfnsdjkfnsdFsd</h1>
        <h1 style={{ marginTop: "2rem" }}> $SELENE</h1>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import Newsletter from "./components/Newsletter";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1 style={{ marginTop: "10rem" }}>
        $POTM is changing the game! Join us in our journey to the moon 🚀🌕
      </h1>
      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <a
          href="https://twitter.com/votrecomptetwitter"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <h1 style={{ marginTop: "2rem" }}>CLICK BELOW TO JOIN US</h1>
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </div>

      <Newsletter />

      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h1>ca : Fpo9ZnVN3FfjfnsdjkfnsdFsd</h1>
        <h1 style={{ marginTop: "2rem" }}> $POTM</h1>
      </div>
    </div>
  );
}

export default App;

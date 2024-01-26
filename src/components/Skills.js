import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import fishImage from "../assets/img/1.png";
import fishImage2 from "../assets/img/logo.png";
import fishImage3 from "../assets/img/10.png";
import fishImage4 from "../assets/img/4.png";
import fishImage5 from "../assets/img/5.png";
import fishImage6 from "../assets/img/6.png";
import mamak from "../assets/img/mamak.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const fishFriends = [
    {
      name: "Galaxy",
      role: "CEO of FRANK ",
      img: fishImage,
      description: "CEO of FRANK",
    },
    {
      name: "JIMMY",
      role: "UI/UX DESIGNER",
      img: fishImage2,
      description: "UI/UX DESIGNER",
    },
    {
      name: "MIKE",
      role: "SOLIDITY/PYTHON DEVELOPER",
      img: fishImage3,
      description: "SOLIDITY/PYTHON DEVELOPER",
    },
    // Add more fishFriends as needed
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2 style={{ fontSize: "2rem" }}>
                Snoop Doggy Dogg
                </h2>
              <p>
                Snoop Dogg has been a good supporter of the crypto space during
                the last bullrun, what's better to grab his attention than a
                token in honor of his lovely dog! $FRANK is about to make so
                much noise barking everywhere to get Snoop to interact with him
                on X, one snoop tweet and we all make it!!
              </p>
              
              <div style={{ marginTop: "4rem", width: "80%", textAlign: "center" }}>
        <img style={{ textAlign: "center" }} src={mamak} alt="" />
      </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="Underwater Background"
      />
    </section>
  );
};

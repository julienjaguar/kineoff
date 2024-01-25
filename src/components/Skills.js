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
              <h2 style={{ fontSize: "2rem" }}>FRANK CTO TEAM</h2>
              <p>
                Snoop Dogg has been a good supporter of the crypto space during
                the last bullrun, what's better to grab his attention than a
                token in honor of his lovely dog! $FRANK is about to make so
                much noise barking everywhere to get Snoop to interact with him
                on X, one snoop tweet and we all make it!!
              </p>
              <Carousel
                style={{ backgroundColor: "black" }}
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {fishFriends.map((fishFriend, index) => (
                  <div key={index} className="item">
                    <img
                      style={{ width: "5rem", height: "5rem" }}
                      src={fishFriend.img}
                      alt={`${fishFriend.name} Controller`}
                    />
                    <h5 style={{ marginTop: "5rem" }}>{fishFriend.name}</h5>
                  </div>
                ))}
              </Carousel>
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

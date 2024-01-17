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
      name: "Kirby",
      role: "Star of the Sea",
      img: fishImage,
      description:
        "Kirby is a shining star in the vast sea, ready for a new adventure.",
    },
    {
      name: "Kine",
      role: "Best Fish Friend",
      img: fishImage2,
      description:
        "Meet Kine, Kirby's best fish friend. He is here to help Kirby send to the moon.",
    },
    {
      name: "Finn",
      role: "Adventure Companion",
      img: fishImage3,
      description:
        "Finn is a loyal companion of Kine, always swimming by his side.",
    },
    {
      name: "Bubbles",
      role: "Cheerful Explorer",
      img: fishImage4,
      description:
        "Bubbles loves exploring with Kine, bringing joy and laughter to the underwater journey.",
    },
    {
      name: "Splash",
      role: "Curious Swimmer",
      img: fishImage5,
      description:
        "Splash has a curious nature, always seeking new wonders in the sea alongside Kine.",
    },
    {
      name: "Sbob",
      role: "Loyal Mate",
      img: fishImage6,
      description:
        "Gill is a loyal mate of Kine, supporting him and Kirby in their moon-bound adventure.",
    },
    // Add more fishFriends as needed
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2 style={{ fontSize: "2rem" }}>Underwater Wonders</h2>
              <p>
                Dive into the world of underwater controllers, resistant to the
                depths and delivered swiftly within 36 hours (except on business
                days).
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

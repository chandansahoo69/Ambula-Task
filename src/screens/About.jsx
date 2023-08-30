import ReactIcon from "components/ReactIcon/ReactIcon";
import React from "react";

const About = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-box">
          <p className="about-desc">
            Ambula is an App based on UHI(Unified Health Interface) popularly
            known as 'Ayushman Bharat Digital Mission' envisioned by our
            honourable Prime Minister of India which connects patients live with
            the unified health network across India for all healthcare needs.
            Our mission is to bridge communication gaps in healthcare delivery
            and empower individuals to take control of their health.
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: "1.5rem",
            }}
          >
            <ReactIcon className="fa-times" iconName={"mdi:location"} />{" "}
            Bhubaneswar, Orissa, India
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: "1.5rem",
            }}
          >
            <ReactIcon className="fa-times" iconName={"ic:baseline-people"} />{" "}
            10-50 People
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

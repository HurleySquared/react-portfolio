import React from "react";
import image from "../../images/wa-pro2.jpg";
import "./style.css";

function AboutMe() {
  return (
    <>
      <div className="media container">
        <div className="about-img-box">
          <img src={image} className="align-self-start mr-3" alt="Eric Hurley Focused"/>
        </div>
        <div className="media-body">
          <h2 className="mt-0">About Me</h2>
          <p className="lead col-md">
            Hello There! I'm a Lineman turned Developer. In January of 2021 I decided to start my journey in this realm.
            The past 5+ years I went the self-taught route on and off with coding and IT before finally
            enrolling in a coding bootcamp. Some of my hobbies include Brazilian Jiu-Jitsu,
            blockchain development, models & robotics, working on cars, traveling, and hiking.
          </p>
          <p className="lead col-md">
              Since June of 2021, I've been working at Randall-Reilly as a front-end developer. I've been working with Vue,
            SASS, PHP, Laravel, and various other tech services. While in my role, I have grown my knowledge in Google Analytics,
            Tag Manager, Optimize, & Google Ads. Currently, I am trying to progress my knowledge in React while learning the ins 
            and outs of Solidity for Ethereum blockchain game development.
          </p>
        </div>
      </div>
    </>
  )
};

export default AboutMe;
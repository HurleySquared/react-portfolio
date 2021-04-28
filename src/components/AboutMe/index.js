import React from "react";
import image from "../../images/wa-pro2.jpg";
import "./style.css";

function AboutMe() {
  return (
    <>
      <div className="media container">
        <img src={image} className="align-self-start mr-3" alt="Eric Hurley Focused"/>
          <div className="media-body">
            <h2 className="mt-0">About Me</h2>
            <p classNameName="lead col-md">
              Hello There! I'm a Lineman turned Developer. In January of 2021 I decided to start my journey in this realm.
              The past 5+ years I went the self-taught route on and off with coding and IT before finally
              enrolling in a coding bootcamp. Some of my hobbies include Brazilian Jiu-Jitsu,
              learning about tech, snowboarding, working on cars, traveling, and hiking.
              I dabble in photography and graphic design from time to time as well.
          </p>
        </div>
      </div>
    </>
  )
};

export default AboutMe;
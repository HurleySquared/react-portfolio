import React from "react";
import "./style.css";

function Contact() {
  return (
    <>
      <h2>Contact Me</h2>
      <div className="contact">
            <a href="https://www.linkedin.com/in/eric-hurley-profile/" target="_blank" rel="nonreferrer">LinkedIn</a>
            <a href="https://github.com/HurleySquared" target="_blank" rel="nonreferrer">GitHub</a>
            <a href="https://docs.google.com/document/d/1ws8_QW5SPapujCuHXj8KvUz8nat8maRGm_ZPXHEaEOU/edit?usp=sharing"
              target="_blank" rel="nonreferrer">Resume</a>
            <a href="mailto:erichurley421@gmail.com">Email</a>
      </div>
    </>
  )
}

export default Contact;
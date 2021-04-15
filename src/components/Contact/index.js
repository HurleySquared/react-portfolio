import React from "react";

function Contact() {
  return (
    <>
      <h2>Contact Me</h2>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <a href="https://www.linkedin.com/in/eric-hurley-profile/" target="_blank" rel="nonreferrer">LinkedIn</a>
        </li>
        <li class="list-group-item">
          <a href="https://github.com/HurleySquared" target="_blank" rel="nonreferrer">GitHub</a>
        </li>
        <li class="list-group-item">
          <a href="https://docs.google.com/document/d/1ws8_QW5SPapujCuHXj8KvUz8nat8maRGm_ZPXHEaEOU/edit?usp=sharing" 
            target="_blank" rel="nonreferrer">Resume</a>
          </li>
        <li class="list-group-item">
          <a href="mailto:erichurley421@gmail.com">erichurley421@gmail.com</a>
        </li>
      </ul>
    </>
  )
}

export default Contact;
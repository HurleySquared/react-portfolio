import React from "react";
import images from "../../images/boo-homepage.png";
import faf from "../../images/freshair.png";
import pass from "../../images/password-gen-working.jpg";
import empDir from "../../images/employee-ss.png";
import read from "../../images/ss-readme-gen.png";
import workout from "../../images/workout-ss2.png";
import "./style.css";

function Projects() {
  return (
    <div className="holder">
      <div className="card bane">
        <div className="card-body">
          <h5 className="card-title">Bane of Olympus</h5>
          <img src={images} className="card-img-top" alt="..." />
          <p className="card-text">Bane of Olympus is a game where the user battles
          against the old Gods. Login or Sign up to leave your name in the rankings against
          other players.
        </p>
          <a href="https://baneofolympus.herokuapp.com/" className="card-link">Deployed Application</a>
          <a href="https://github.com/HurleySquared/bane-of-olympus" className="card-link">Bane of Olympus Repo</a>
        </div>
      </div>
      <div className="card fresh">
        <div className="card-body">
          <h5 className="card-title">Fresh Air Finder</h5>
          <img src={faf} className="card-img-top" alt="..." />
          <p className="card-text">This application locates National Parks in the state you
            select. You can then see a 5-Day weather forecast based on that parks area code.
          </p>
          <a href="https://hurleysquared.github.io/fresh-air-finder/" className="card-link">Deployed Application</a>
          <a href="https://github.com/HurleySquared/fresh-air-finder" className="card-link">Fresh Air Finder Repo</a>
        </div>
      </div>
      <div className="card read">
        <div className="card-body">
          <h5 className="card-title">README Generator</h5>
          <img src={read} className="card-img-top" alt="..." />
          <p className="card-text">Utilizing node.js and the inquirer package you will 
            be able to generate a professional README.md including licensing for the users project.
          </p>
          <a href="https://drive.google.com/file/d/1FwcKeZGVY72PxvY_oB_FkBMitneQGP-z/view" className="card-link">Walk-through Video</a>
          <a href="https://github.com/HurleySquared/readme-generator" className="card-link">README Generator Repo</a>
        </div>
      </div>
      <div className="card workout">
        <div className="card-body">
          <h5 className="card-title">Workout Tracker</h5>
          <img src={workout} className="card-img-top" alt="..." />
          <p className="card-text">Save and track your fitness goals through out the week with this workout tracker. 
            Between Resistance or Cardio training you can store your workouts utilizing MongoDB and Mongoose.js.
          </p>
          <a href="https://eric-workout-tracker-01.herokuapp.com/?id=606777397fcdd7026d074097" className="card-link">Deployed Application</a>
          <a href="https://github.com/HurleySquared/workout-tracker" className="card-link">Workout Tracker Repo</a>
        </div>
      </div>
      <div className="card direct">
        <div className="card-body">
          <h5 className="card-title">Employee Directory</h5>
          <img src={empDir} className="card-img-top" alt="..." />
          <p className="card-text">This application uses the Random User API to generate basic user info. I then put it into a table you can search.</p>
          <a href="https://hurleysquared.github.io/employee-directory/" className="card-link">Deployed Application</a>
          <a href="https://github.com/HurleySquared/employee-directory" className="card-link">Employee Directory Repo</a>
        </div>
      </div>
      <div className="card password">
        <div className="card-body">
          <h5 className="card-title">Password Generator Application</h5>
          <img src={pass} className="card-img-top" alt="..." />
          <p className="card-text">This application will randomly generate a password between 8-128 characters.</p>
          <a href="https://hurleysquared.github.io/password-generator/" className="card-link">Deployed Application</a>
          <a href="https://github.com/HurleySquared/password-generator" className="card-link">Password Generator Repo</a>
        </div>
      </div>
    </div>
  )
}

export default Projects;
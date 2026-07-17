import "./About.css";

import meetingImg from "../../assets/Images/meeting.png";
import teamImg from "../../assets/Images/team.png";

import triangle from "../../assets/shapes/Polygon 1.png";
import polygon from "../../assets/shapes/Polygon 3.png";
import curve from "../../assets/shapes/curve.svg";

function About() {
  return (
    <section className="about">

      {/* Background Glow */}
      <div className="about-glow"></div>
      <img src={curve} alt="" className="about-curve" />

      {/* Decorative Shapes */}
      <img src={polygon} alt="" className="polygon-top" />
      <img src={triangle} alt="" className="triangle-bottom" />

      {/* Decorative Curve */}
      
        <path
          d="M120 210
             C260 120 360 320 500 220
             S700 20 880 170"
          fill="none"
          stroke="#ff6b6b"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <path
          d="M120 214
             C260 124 360 324 500 224
             S700 24 880 174"
          fill="none"
          stroke="#ffd9d9"
          strokeWidth="8"
          opacity="0.5"
          strokeLinecap="round"
        />
     

      {/* ---------- TOP ---------- */}

      <div className="about-row top-row">

        <div className="about-text top-text">

          <h2>
            Tomorrow should
            <br />
            be better than <span>today</span>
          </h2>

          <p>
            We are a team of strategists, designers communicators,
            researchers. Together, we believe that progress only
            happens when you refuse to play things safe.
          </p>

          <a href="/">Read more</a>

        </div>

        <div className="about-image meeting-image">
          <img src={meetingImg} alt="Meeting" />
        </div>

      </div>

      {/* ---------- BOTTOM ---------- */}

      <div className="about-row bottom-row">

        <div className="about-image team-image">
          <img src={teamImg} alt="Team" />
        </div>

        <div className="about-text bottom-text">

          <h2>
            <span>See</span> how we can
            <br />
            help you <span className="plain">progress</span>
          </h2>

          <p>
            We add a layer of fearless insights and action that
            allows change makers to accelerate their progress in
            areas such as brand, design, digital, comms and social
            research.
          </p>

          <a href="/">Read more</a>

        </div>

      </div>

    </section>
  );
}

export default About;
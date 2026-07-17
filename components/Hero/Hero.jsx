import "./Hero.css";
import heroPeople from "../../assets/images/hero-people.png";

import pinkCurve from "../../assets/shapes/pink-curve.svg";
import blackCurve from "../../assets/shapes/black-curve.svg";
import purpleshape from "../../assets/shapes/purple-semicircle.png.png";

function Hero() {
  return (
    <section className="hero">

      <h1 className="hero-title">
        The <span className="underline">thinkers</span> and <br />
        doers were <span className="pink">changing</span><br />
        the <span className="green">status</span> Quo with
      </h1>

      <p className="hero-text">
        We are a team of strategists, designers, communicators,
        researchers. Together, we believe that progress only
        happens when you refuse to play things safe.
      </p>

      <img
        src={heroPeople}
        alt="People"
        className="hero-image"
      />

      <img src={pinkCurve} alt="" className="pink-curve" />

<img src={blackCurve} alt="" className="black-curve" />
<img src={purpleshape} alt="" className="purple-shape" />

    </section>
  );
}

export default Hero;
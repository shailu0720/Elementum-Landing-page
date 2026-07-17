import "./Footer.css";

import arrowLeft from "../../assets/shapes/arrow-left.png";
import arrowRight from "../../assets/shapes/arrow-right.png";
import purpleShape from "../../assets/shapes/Purple-semicircle.png";


function Footer() {
  return (
    <section className="footer">

     <img src={arrowLeft} alt="" className="arrow-left" />
<img src={arrowRight} alt="" className="arrow-right" />

<img src={purpleShape} alt="" className="purple-shape" />

      <div className="newsletter">

        <h2>
          Subscribe to
          <br />
          our newsletter
        </h2>

        <p>
          To make your stay special and even more memorable
        </p>

        <button>Subscribe Now</button>

      </div>

      <hr />

      <div className="footer-links">

        <div>
          <h3>Company</h3>

          <a href="/">Home</a>
          <a href="/">Studio</a>
          <a href="/">Service</a>
          <a href="/">Blog</a>
        </div>

        <div>

          <h3>Terms & Policies</h3>

          <a href="/">Privacy Policy</a>
          <a href="/">Terms & Conditions</a>
          <a href="/">Explore</a>
          <a href="/">Accessibility</a>

        </div>

        <div>

          <h3>Follow Us</h3>

          <a href="/">Instagram</a>
          <a href="/">LinkedIn</a>
          <a href="/">YouTube</a>
          <a href="/">Twitter</a>

        </div>

        <div>

          <h3>Contact</h3>

          <p>1498w Fulton Ste, STE</p>
          <p>2D Chicago, IL 6367.</p>

          <br />

          <p>(123) 456789000</p>

          <br />

          <p>info@elementum.com</p>

        </div>

      </div>

      <p className="copyright">
        ©2023 Elementum. All rights reserved
      </p>

    </section>
  );
}

export default Footer;
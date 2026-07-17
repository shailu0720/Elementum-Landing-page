import "./Testimonials.css";

import testimonials from "../../assets/Images/testimonials.png";

function Testimonials() {
  return (
    <section className="testimonials">
      <img
        src={testimonials}
        alt="Testimonials"
        className="testimonials-img"
      />
    </section>
  );
}

export default Testimonials;
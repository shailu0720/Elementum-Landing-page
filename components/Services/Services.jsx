import "./Services.css";

import pinkCurve from "../../assets/shapes/Pink.svg";
 // export this from figma

function Services() {

  const services = [
    {
      left: "Office of multiple\ninterest content",
      right: "Colaborative & partnership"
    },
    {
      left: "The hanger US Air force\ndigital experimental",
      right: "We talk about our weight"
    },
    {
      left: "Delta faucet content,\nsocial, digital",
      right: "Piloting digital confidence"
    }
  ];

  return (

    <section className="services">

      <div className="services-top">

        <div className="heading">

          <h2>
            What we <span>can</span>
            <br />
            <span className="underline">offer</span> you!
          </h2>

        </div>

        <img src={pinkCurve} alt="" className="service-curve"/>

      </div>

      <div className="service-list">

        {services.map((item,index)=>(

          <div className="service-item" key={index}>

            <p className="left">
              {item.left}
            </p>

            <h3 className="right">
              {item.right}
            </h3>

            <span className="arrow">
              →
            </span>

            
          </div>

        ))}

      </div>

    </section>

  );
}

export default Services;
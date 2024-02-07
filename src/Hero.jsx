import React from "react";
import heroImg from "./assets/mindset.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            I'm baby before they sold out dreamcatcher health goth, prism ennui kombucha art party. Jianbing fixie craft beer pug. Art party readymade gluten-free butcher, man
            braid lomo helvetica cardigan etsy literally. Marfa tousled umami humblebrag. Slow-carb tote bag freegan hella. Direct trade hexagon portland tote bag blog poutine hell
            of chia small batch glossier listicle wayfarers.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

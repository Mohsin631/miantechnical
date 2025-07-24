import React from "react";
import "../../assets/scss/cta/cta.css";

const CTASection = () => {
  return (
    <section className="modern-cta">
      <div className="cta-overlay">
        <div className="cta-content">
          <h2>Bring Your Vision to Life</h2>
          <p>We design and build scalable, powerful, and beautiful digital experiences for startups and enterprises.</p>
          <a href="/contact" className="cta-btn">Let's Build Together</a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

import React from "react";
import "../../assets/scss/cta/cta.css";
import { useTranslation } from "react-i18next";

const CTASection = () => {
    const { t } = useTranslation();
  
  return (
    <section className="modern-cta">
      <div className="cta-overlay">
        <div className="cta-content">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold mb-4 sm:mb-6 leading-tight"> {t("footer.cta.boxTitle")}</h1>
          <p> {t("footer.cta.boxSubtitle")}</p>
          <a href="/contact" className="cta-btn"> {t("footer.cta.btnText")}</a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

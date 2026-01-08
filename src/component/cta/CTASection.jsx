import React from "react";
import "../../assets/scss/cta/cta.css";
import { useTranslation } from "react-i18next";

const CTASection = () => {
    const { t } = useTranslation();
  
  return (
    <section className="modern-cta">
      <div className="cta-overlay">
        <div className="cta-content">
          <h2> {t("footer.cta.boxTitle")}</h2>
          <p> {t("footer.cta.boxSubtitle")}</p>
          <a href="/contact" className="cta-btn"> {t("footer.cta.btnText")}</a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

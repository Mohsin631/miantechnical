import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import ContactForm from "./ContactForm";

import about from "../../assets/images/about/contact-main.png";

class ContactTwo extends Component {
  render() {
    const { t } = this.props;
    
    return (
      <div className="contact-form--1">
        <div className="container">
          <div className="row row--35 align-items-start">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="section-title text-left mb--50">
                <h2 className="title">{t("contact2.title")}</h2>
                <p className="description">
                  {t("contact2.description")}
                </p>
              </div>
              <div className="form-wrapper">
                <ContactForm />
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="thumbnail mb_md--30 mb_sm--30">
                <img src={about} alt={t("contact2.imageAlt")} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation()(ContactTwo);
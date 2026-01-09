import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import PageHelmet from "../component/common/Helmet";
import { FiHeadphones, FiMail, FiMapPin } from "react-icons/fi";
import GoogleMapReact from 'google-map-react';
import ContactTwo from "../elements/contact/ContactTwo";
import BrandTwo from "../elements/BrandTwo";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Contact extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    const { t } = this.props;

    const contactInfo = [
      {
        icon: <FiHeadphones className="text-4xl" />,
        title: t("contact.info.phone.title"),
        content: t("contact.info.phone.content"),
        link: "tel:+17808008651"
      },
      {
        icon: <FiMail className="text-4xl" />,
        title: t("contact.info.email.title"),
        content: t("contact.info.email.content"),
        link: "mailto:info@miantechnical.net"
      },
      {
        icon: <FiMapPin className="text-4xl" />,
        title: t("contact.info.location.title"),
        content: t("contact.info.location.content"),
        link: null
      }
    ];

    return (
      <React.Fragment>
        <PageHelmet pageTitle={t("contact.pageTitle")} />

        <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

        {/* Start Breadcrumb Area */}
        <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--17" data-black-overlay="6">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="rn-page-title text-center pt--100">
                  <h2 className="title theme-gradient">{t("contact.title")}</h2>
                  <p>{t("contact.subtitle")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Breadcrumb Area */}

        {/* Start Contact Top Area */}
        <div className="rn-contact-top-area ptb--120 bg_color--5">
          <div className="container">
            <div className="row">
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className={`col-lg-4 col-md-6 col-sm-6 col-12 ${
                    index === 1 ? 'mt_mobile--50' : index === 2 ? 'mt_md--50 mt_sm--50' : ''
                  }`}
                >
                  <div className="rn-address text-center">
                    <div className="icon mx-auto mb-8 w-20 h-20 flex items-center justify-center rounded-full bg-gray-50 text-primary">
                      {info.icon}
                    </div>
                    <div className="inner">
                      <h4 className="title text-xl font-semibold mb-4">{info.title}</h4>
                      {info.link ? (
                        <p>
                          <a 
                            href={info.link} 
                            className="text-gray-600 hover:text-primary transition-colors duration-300"
                          >
                            {info.content}
                          </a>
                        </p>
                      ) : (
                        <p className="text-gray-600">{info.content}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End Contact Top Area */}

        {/* Start Contact Page Area */}
        <div className="rn-contact-page ptb--120 bg_color--1">
          <ContactTwo />
        </div>
        {/* End Contact Page Area */}

        {/* Start Contact Map */}
        <div className="rn-contact-map-area position-relative">
          <div className="h-[650px] w-full">
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              />
            </GoogleMapReact>
          </div>
        </div>
        {/* End Contact Map */}

        {/* Start Brand Area */}
        <div className="rn-brand-area brand-separation bg_color--5 ptb--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <BrandTwo />
              </div>
            </div>
          </div>
        </div>
        {/* End Brand Area */}

        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}

        <Footer />
      </React.Fragment>
    )
  }
}

export default withTranslation()(Contact);
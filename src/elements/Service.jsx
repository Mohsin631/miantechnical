import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import { useTranslation } from "react-i18next";

import Breadcrumb from "../elements/common/Breadcrumb";
import {
  FiCast,
  FiLayers,
  FiUsers,
  FiMonitor,
  FiChevronUp,
} from "react-icons/fi";
import ScrollToTop from "react-scroll-up";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

// IT Services

const Service = () => {
  const { t } = useTranslation();

  const ITServices = [
    {
      icon: <FiCast />,
      title: t("home.services.items.itConsulting.title"),
      description: t("home.services.items.itConsulting.description"),
      slug: "it-consulting",
    },
    {
      icon: <FiLayers />,
      title: t("home.services.items.customSoftware.title"),
      description: t("home.services.items.customSoftware.description"),
      slug: "custom-software-development",
    },
    {
      icon: <FiUsers />,
      title: t("home.services.items.digitalMarketing.title"),
      description: t("home.services.items.digitalMarketing.description"),
      slug: "digital-marketing-solutions",
    },
    {
      icon: <FiMonitor />,
      title: t("home.services.items.mobileApp.title"),
      description: t("home.services.items.mobileApp.description"),
      slug: "mobile-app-development",
    },
    {
      icon: <FiCast />,
      title: t("home.services.items.cloud.title"),
      description: t("home.services.items.cloud.description"),
      slug: "cloud-solutions",
    },
    {
      icon: <FiMonitor />,
      title: t("home.services.items.cybersecurity.title"),
      description: t("home.services.items.cybersecurity.description"),
      slug: "cybersecurity-services",
    },
  ];

  const EngineeringServices = [
    {
      icon: <FiLayers />,
      title: t("home.services.items.mechanical.title"),
      description: t("home.services.items.mechanical.description"),
      slug: "mechanical-engineering",
    },
    {
      icon: <FiUsers />,
      title: t("home.services.items.electrical.title"),
      description: t("home.services.items.electrical.description"),
      slug: "electrical-engineering",
    },
    {
      icon: <FiMonitor />,
      title: t("home.services.items.civil.title"),
      description: t("home.services.items.civil.description"),
      slug: "civil-structural-engineering",
    },
    {
      icon: <FiCast />,
      title: t("home.services.items.productDesign.title"),
      description: t("home.services.items.productDesign.description"),
      slug: "product-design-prototyping",
    },
    {
      icon: <FiLayers />,
      title: t("home.services.items.automation.title"),
      description: t("home.services.items.automation.description"),
      slug: "automation-control-systems",
    },
    {
      icon: <FiUsers />,
      title: t("home.services.items.projectManagement.title"),
      description: t("home.services.items.projectManagement.description"),
      slug: "project-management-consultancy",
    },
  ];
  return (
    <React.Fragment>
      <PageHelmet pageTitle="Services" />
      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />

      {/* Start Breadcrump Area */}
      <Breadcrumb title={"Our Services"} />
      {/* End Breadcrump Area */}

      {/* IT Services Section */}
      <div className="service-area ptb--120 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
        <div className="section-title text-center mb--30">
          <h2>{t("services.itServices.title")}</h2>
          <p>{t("services.itServices.description")}</p>
        </div>
      </div>
          </div>
          <div className="row service-one-wrapper">
            {ITServices.map((val, i) => (
              <div
                className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"
                key={i}
              >
                <a href={`/services/${val.slug}`}>
                  <div className="service service__style--2">
                    <div className="icon">{val.icon}</div>
                    <div className="content">
                      <h3 className="title">{val.title}</h3>
                      <p>{val.description}</p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End IT Services Section */}

      {/* Engineering Services Section */}
      <div className="service-area ptb--120 bg_color--5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
        <div className="section-title text-center mb--30">
          <h2>{t("services.engineeringServices.title")}</h2>
          <p>{t("services.engineeringServices.description")}</p>
        </div>
      </div>
          </div>
          <div className="row service-one-wrapper">
            {EngineeringServices.map((val, i) => (
              <div
                className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"
                key={i}
              >
                <a href={`/services/${val.slug}`}>
                  <div className="service service__style--2">
                    <div className="icon">{val.icon}</div>
                    <div className="content">
                      <h3 className="title">{val.title}</h3>
                      <p>{val.description}</p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End Engineering Services Section */}

      {/* Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}

      <Footer />
    </React.Fragment>
  );
};

export default Service;

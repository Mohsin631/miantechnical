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
        <div className="md:px-12 xl:px-20">
          <div className="row px-3">
            <div className="col-lg-12">
              <div className="section-title md:text-center xl:text-center mb-3 xl:mb--30">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">{t("services.itServices.title")}</h1>
                <p>{t("services.itServices.description")}</p>
              </div>
            </div>
          </div>

          {/*  ONLY CHANGED THIS PART: grid wrapper + cards */}
          <div className="row service-one-wrapper px-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 w-full px-3">
              {ITServices.map((val, i) => (
                <a key={i} href={`/services/${val.slug}`} className="block h-full">
                  <div className="service service__style--2 bg-gray-100 h-full">
                    <div className="icon">{val.icon}</div>
                    <div className="content">
                      <h3 className="title">{val.title}</h3>
                      <p>{val.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* End IT Services Section */}

      {/* Engineering Services Section */}
      <div className="service-area ptb--120 bg_color--5">
        <div className="md:px-12 xl:px-20">
          <div className="row px-3">
            <div className="col-lg-12">
              <div className="section-title md:text-center xl:text-center mb-3 xl:mb--30">
                <h2>{t("services.engineeringServices.title")}</h2>
                <p>{t("services.engineeringServices.description")}</p>
              </div>
            </div>
          </div>

          {/*  ONLY CHANGED THIS PART: grid wrapper + cards */}
          <div className="row service-one-wrapper px-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 w-full px-3">
              {EngineeringServices.map((val, i) => (
                <a key={i} href={`/services/${val.slug}`} className="block h-full">
                  <div className="service service__style--2 bg-gray-100 h-full">
                    <div className="icon">{val.icon}</div>
                    <div className="content">
                      <h3 className="title">{val.title}</h3>
                      <p>{val.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* End Engineering Services Section */}

      {/* Back To Top */}
      <div className="backto-top fixed bottom-8 right-8 z-50">
        <ScrollToTop showUnder={160}>
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-105 active:scale-95">
            <FiChevronUp className="text-white text-xl" />
          </div>
        </ScrollToTop>
      </div>
      {/* End Back To Top */}

      <Footer />
    </React.Fragment>
  );
};

export default Service;

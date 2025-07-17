import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
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
const ITServices = [
  {
    icon: <FiCast />,
    title: "IT Consulting",
    slug: "it-consulting",
    description:
      "Expert advisory to align technology strategies with your business objectives.",
  },
  {
    icon: <FiLayers />,
    title: "Custom Software Development",
    slug: "custom-software-development",
    description:
      "Tailored software solutions to streamline operations and improve efficiency.",
  },
  {
    icon: <FiUsers />,
    title: "Digital Marketing Solutions",
    slug: "digital-marketing-solutions",
    description:
      "Data-driven marketing strategies that enhance brand visibility and growth.",
  },
  {
    icon: <FiMonitor />,
    title: "Mobile App Development",
    slug: "mobile-app-development",
    description:
      "Cross-platform mobile applications built for seamless user experiences.",
  },
  {
    icon: <FiCast />,
    title: "Cloud Solutions",
    slug: "cloud-solutions",
    description:
      "Secure and scalable cloud services to optimize infrastructure and costs.",
  },
  {
    icon: <FiMonitor />,
    title: "Cybersecurity Services",
    slug: "cybersecurity-services",
    description:
      "Advanced security frameworks to protect digital assets and maintain compliance.",
  },
];

const EngineeringServices = [
  {
    icon: <FiLayers />,
    title: "Mechanical Engineering",
    slug: "mechanical-engineering",
    description:
      "Comprehensive design and analysis of mechanical systems for optimal performance.",
  },
  {
    icon: <FiUsers />,
    title: "Electrical Engineering",
    slug: "electrical-engineering",
    description:
      "Power systems, automation, and electrical design solutions for diverse industries.",
  },
  {
    icon: <FiMonitor />,
    title: "Civil & Structural Engineering",
    slug: "civil-structural-engineering",
    description:
      "Infrastructure planning, structural design, and sustainable construction solutions.",
  },
  {
    icon: <FiCast />,
    title: "Product Design & Prototyping",
    slug: "product-design-prototyping",
    description:
      "Innovative product development from concept to prototype for market readiness.",
  },
  {
    icon: <FiLayers />,
    title: "Automation & Control Systems",
    slug: "automation-control-systems",
    description:
      "Intelligent automation systems to enhance operational efficiency and reduce costs.",
  },
  {
    icon: <FiUsers />,
    title: "Project Management & Consultancy",
    slug: "project-management-consultancy",
    description:
      "Expert engineering consultancy to ensure successful project execution and delivery.",
  },
];

class Service extends Component {
  render() {
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
                  <h2>IT Services</h2>
                  <p>
                    Empowering businesses with innovative IT solutions that
                    drive efficiency, security, and growth.
                  </p>
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
                  <h2>Engineering Services</h2>
                  <p>
                    Delivering world-class engineering solutions to design,
                    optimize, and build for the future.
                  </p>
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
  }
}

export default Service;

import React from "react";
import { ProgressBar } from "react-bootstrap";
import Helmet from "../component/common/Helmet";
import ScrollToTop from "react-scroll-up";
import Slider from "react-slick";
import { slideSlick } from "../page-demo/script";
import {
  FiCast,
  FiLayers,
  FiUsers,
  FiMonitor,
  FiChevronUp,
} from "react-icons/fi";
import Header from "../component/header/Header";
import FooterTwo from "../component/footer/Footer";
import VideoModal from "../blocks/VideoModal";
import BrandTwo from "../elements/BrandTwo";

import about from "../assets/images/about/about-3.jpg";
import bgImg from "../assets/images/bg/bg-image-26.jpg";

const SlideList = [
  {
    textPosition: "text-left",
    bgImage: "bg_image--33",
    category: "Mian Technical",
    title: "Cutting-edge IT & Engineering Solutions",
    description:
      "We deliver innovative technology and engineering services that enhance efficiency, foster growth, and drive digital transformation.",
    buttonText: "Contact Us",
    buttonLink: "/contact",
  },
];

const ServiceList = [
  {
    icon: <FiCast />,
    title: "IT Consulting",
    description:
      "Strategic technology advisory to align IT solutions with your business objectives.",
    slug: "it-consulting",
  },
  {
    icon: <FiLayers />,
    title: "Custom Software Development",
    description:
      "Tailored software applications to optimize workflows and deliver business value.",
    slug: "custom-software-development",
  },
  {
    icon: <FiUsers />,
    title: "Digital Marketing Solutions",
    description:
      "Innovative strategies to boost your brand presence and customer engagement.",
    slug: "digital-marketing-solutions",
  },
  {
    icon: <FiMonitor />,
    title: "Mobile App Development",
    description:
      "Cross-platform mobile apps with intuitive UI and seamless user experience.",
    slug: "mobile-app-development",
  },
  {
    icon: <FiCast />,
    title: "Cloud Infrastructure & Services",
    description:
      "Secure and scalable cloud solutions for improved flexibility and cost efficiency.",
    slug: "cloud-solutions",
  },
  {
    icon: <FiMonitor />,
    title: "Cybersecurity & Compliance",
    description:
      "Robust security solutions to safeguard data and ensure regulatory compliance.",
    slug: "cybersecurity-services",
  },
  {
    icon: <FiLayers />,
    title: "Mechanical Engineering Services",
    description:
      "Design, analysis, and optimization of mechanical systems to ensure performance and reliability.",
    slug: "mechanical-engineering",
  },
  {
    icon: <FiUsers />,
    title: "Electrical Engineering Solutions",
    description:
      "Power systems, automation, and electrical designs for industrial and commercial projects.",
    slug: "electrical-engineering",
  },
  {
    icon: <FiMonitor />,
    title: "Civil & Structural Engineering",
    description:
      "Comprehensive structural design and project planning for sustainable infrastructure.",
    slug: "civil-structural-engineering",
  },
  {
    icon: <FiCast />,
    title: "Product Design & Prototyping",
    description:
      "End-to-end product development, from concept design to functional prototypes.",
    slug: "product-design-prototyping",
  },
  {
    icon: <FiLayers />,
    title: "Automation & Control Systems",
    description:
      "Smart automation solutions to enhance operational efficiency and reduce downtime.",
    slug: "automation-control-systems",
  },
  {
    icon: <FiUsers />,
    title: "Project Management & Engineering Consultancy",
    description:
      "Expert planning, execution, and consulting services to ensure project success.",
    slug: "project-management-consultancy",
  },
];


const InteractiveAgency = () => {
  return (
    <>
      <Helmet pageTitle="Our Services" />
      <Header />

      {/* Start Slider Area */}
      <div className="slider-wrapper">
        <div className="slider-activation">
          {SlideList.map((value, index) => (
            <div
              className={`slide slide-style-2 d-flex align-items-center justify-content-center bg_image ${value.bgImage}`}
              key={index}
              data-black-overlay="8"
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className={`inner ${value.textPosition}`}>
                      {value.category ? <span>{value.category}</span> : ""}
                      {value.title ? (
                        <h1 className="title">{value.title}</h1>
                      ) : (
                        ""
                      )}
                      {value.description ? (
                        <p className="description">{value.description}</p>
                      ) : (
                        ""
                      )}
                      {value.buttonText ? (
                        <div className="slide-btn">
                          <a
                            className="rn-button-style--2 btn-solid"
                            href={`${value.buttonLink}`}
                          >
                            {value.buttonText}
                          </a>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* End Slider Area */}

{/* Start About Area */}
<div className="rn-about-area ptb--120 bg_color--1">
  <div className="rn-about-wrapper">
    <div className="container">
      <div className="row row--35 align-items-center">
        <div className="col-lg-7">
          <div className="about-inner inner">
            <div className="section-title">
              <h2 className="title">Who We Are</h2>
              <p className="description">
                We are a trusted technology and engineering solutions partner dedicated to empowering businesses with cutting-edge innovations. Our mission is to deliver transformative IT services and engineering expertise that enhance efficiency, drive growth, and create lasting impact for our clients worldwide.
              </p>
            </div>
            <div className="row mt--30">
              <div className="col-lg-12">
                <div className="about-us-list">
                  <h3 className="title">Our Core Strengths</h3>
                  <div className="rn-progress-bar progress-bar--3">
                    <div className="single-progress custom-color--1">
                      <h6 className="title">Innovative Design & UX</h6>
                      <ProgressBar now={92} />
                      <span className="label">92%</span>
                    </div>

                    <div className="single-progress custom-color--2">
                      <h6 className="title">Engineering & Project Management</h6>
                      <ProgressBar now={88} />
                      <span className="label">88%</span>
                    </div>

                    <div className="single-progress custom-color--3">
                      <h6 className="title">Digital Marketing Strategy</h6>
                      <ProgressBar now={84} />
                      <span className="label">84%</span>
                    </div>

                    <div className="single-progress custom-color--4">
                      <h6 className="title">Custom Software & App Development</h6>
                      <ProgressBar now={96} />
                      <span className="label">96%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-5 mt_md--40 mt_sm--40">
          <div className="thumbnail">
            <img className="w-100" src={about} alt="About Images" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* End About Area */}


      {/* Start Service Area */}
      <div className="service-area creative-service-wrapper pb--120 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb--30">
                <h2>Our Services</h2>
                <p>
                  We provide a wide range of IT and engineering services designed to empower your business with innovation, security, and growth.
                </p>
              </div>
            </div>
          </div>
          <div className="row creative-service">
            {ServiceList.map((val, i) => (
              <div
                className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"
                key={i}
              >
              <a classname="text-center" href={`/services/${val.slug}`}>
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
      {/* End Service Area */}

      {/* Start Video Area */}
      <div className="rn-section pb--120 bg_color--1">
        <div className="container">
          <div className="row sercice-details-content align-items-center">
            <div className="col-lg-12">
              <div className="thumb position-relative">
                <img className="w-100" src={bgImg} alt="Service Images" />
                <VideoModal />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Video Area */}

      {/* Start Brand Area */}
      <div className="rn-brand-area pb--120 bg_color--1">
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

      <FooterTwo />
    </>
  );
};

export default InteractiveAgency;

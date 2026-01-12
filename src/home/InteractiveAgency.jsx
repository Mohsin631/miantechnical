import React from "react";
import { useTranslation } from "react-i18next";
import { ProgressBar } from "react-bootstrap";
import Helmet from "../component/common/Helmet";
import VideoSecionComponent from "../home/VideoSection";
import { Link } from "react-router-dom";
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
import homeVideo from "../assets/video/home-video.mp4";

// import about from "../assets/images/about/about-3.jpg";
import about from "../assets/images/about/about-img.jpg";
import bgImg from "../assets/images/bg/bg-image-26.jpg";

const InteractiveAgency = () => {
  const { t } = useTranslation();

  const SlideList = [
    {
      textPosition: "text-left",
      bgImage: "bg_image--33",
      category: t("home.hero.category"),
      title: t("home.hero.title"),
      description: t("home.hero.description"),
      buttonText: t("home.hero.buttonText"),
      buttonLink: "/contact",
    },
  ];

  const ServiceList = [
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
    <>
      <Helmet pageTitle={t("home.meta.pageTitle")} />
      <Header />

      {/* Start Slider Area */}
      <div className="slider-wrapper">
        <div className="slider-activation">
          {SlideList.map((value, index) => (
            <div
              className={`slide slide-style-2 d-flex align-items-center md:px-20 xl:px-20 2xl:px-20 bg_image ${value.bgImage}`}
              key={index}
              data-black-overlay="8"
            >
              <div className="">
                <div className="row">
                  <div className="col-lg-12">
                    <div className={`${value.textPosition}`}>
                      {value.category ? <span>{value.category}</span> : ""}
                      {value.title ? (
                        <h1 className="title  wrap text-4xl md:text-7xl xl:text-7xl 2xl:text-7xl max-w-5xl text-white py-1 px-3">{value.title}</h1>
                      ) : (
                        ""
                      )}
                      {value.description ? (
                        <p className="description text-1xl max-w-3xl text-white mb-3 py-3 px-3">{value.description}</p>
                      ) : (
                        ""
                      )}
                      {value.buttonText ? (
                        <div className="slide-btn px-3">
                          <a
                            className="rn-button-style--2 btn-solid py-3"
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
          <div className="container p-0">
            <div className="row row--35 align-items-center">
              <div className="col-lg-7">
                <div className="xl:about-inner xl:inner py-0">
                  <div className="section-title">
                    <h2 className="title wrap">{t("home.about.title")}</h2>
                    <p className="description">{t("home.about.description")}</p>
                  </div>

                  <div className="row mt--30">
                    <div className="col-lg-12">
                      <div className="about-us-list">
                        <h3 className="title wrap">
                          {t("home.about.coreStrengthsTitle")}
                        </h3>

                        <div className="rn-progress-bar progress-bar--3">
                          <div className="single-progress custom-color--1">
                            <h6 className="title wrap">
                              {t("home.about.strengths.designUx")}
                            </h6>
                            <ProgressBar now={92} />
                            <span className="label">92%</span>
                          </div>

                          <div className="single-progress custom-color--2">
                            <h6 className="title wrap">
                              {t("home.about.strengths.engineeringPM")}
                            </h6>
                            <ProgressBar now={88} />
                            <span className="label">88%</span>
                          </div>

                          <div className="single-progress custom-color--3">
                            <h6 className="title wrap">
                              {t("home.about.strengths.marketing")}
                            </h6>
                            <ProgressBar now={84} />
                            <span className="label">84%</span>
                          </div>

                          <div className="single-progress custom-color--4">
                            <h6 className="title wrap">
                              {t("home.about.strengths.softwareApps")}
                            </h6>
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
        <div className="container p-0">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-start xl:text-center mb-3 xl:mb--30">
                <h2>{t("home.services.title")}</h2>
                <p>{t("home.services.subtitle")}</p>
              </div>
            </div>
          </div>

          <div className="row creative-service">
            {ServiceList.map((val, i) => (
              <div
                className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"
                key={i}
              >
                {/* keeping your original tag to avoid affecting functionality */}
                <a classname="text-center" href={`/services/${val.slug}`}>
                  <div className="service service__style--2">
                    <div className="icon">{val.icon}</div>
                    <div className="content">
                      <h3 className="title wrap">{val.title}</h3>
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
      <VideoSecionComponent />
      {/* <div className="video-section">
        <div className="video-wrapper">
          <video className="background-video p-0" autoPlay loop muted playsInline>
            <source src={homeVideo} type="video/mp4" />
            {t("home.video.fallback")}
          </video>

          <div className="video-overlay-content">
            <h2 className="video-title">{t("home.video.title")}</h2>
            <p className="video-subtitle">{t("home.video.subtitle")}</p>

            <Link to="/contact">
              <button className="video-cta-button">
                {t("home.video.buttonText")}
              </button>
            </Link>{" "}
          </div>
        </div>

        <style>{`
          .video-section {
            position: relative;
            width: 100%;
            height: 100vh;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #000;
          }

          .video-wrapper {
            width: 100%;
            height: 100%;
            position: relative;
          }

          .background-video {
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: brightness(0.6);
          }

          .video-overlay-content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            color: #fff;
            z-index: 2;
            padding: 40px;
            background: rgba(0, 0, 0, 0.4);
            backdrop-filter: blur(8px);
            border-radius: 16px;
            box-shadow: 0 8px 30px rgba(0,0,0,0.5);
            max-width: 90%;
          }

          .video-title {
            font-size: 48px;
            font-weight: bold;
            margin-bottom: 20px;
            line-height: 1.2;
            color: #fff;
          }

          .video-subtitle {
            font-size: 20px;
            margin-bottom: 30px;
            opacity: 0.85;
            color: #fff;
          }

          .video-cta-button {
            padding: 14px 36px;
            background: linear-gradient(135deg, #eb1d27, #eb1d27);
            border: none;
            border-radius: 10px;
            color: #fff;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            transition: all 0.3s ease;
          }

          .video-cta-button:hover {
            background: linear-gradient(135deg, #ffffffffrgba(255, 255, 255, 1)15);
            transform: scale(1.05);
          }

          @media (max-width: 768px) {
            .video-title {
              font-size: 28px;
            }

            .video-subtitle {
              font-size: 16px;
            }

            .video-cta-button {
              padding: 12px 24px;
              font-size: 14px;
            }

            .video-overlay-content {
              padding: 24px;
              border-radius: 12px;
            }
          }
        `}</style>
      </div> */}
      {/* End Video Area */}

      {/* Start Brand Area */}
      <div className="rn-brand-area bg_color--1">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-12">
              <BrandTwo />
            </div>
          </div>
        </div>
      </div>

      {/* End Brand Area */}

      {/* Start Back To Top */}
      <div className="backto-top fixed bottom-8 right-8 z-50">
        <ScrollToTop showUnder={160}>
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-105 active:scale-95">
            <FiChevronUp className="text-white text-xl" />
          </div>
        </ScrollToTop>
      </div>
      {/* End Back To Top */}

      <FooterTwo />
    </>
  );
};

export default InteractiveAgency;
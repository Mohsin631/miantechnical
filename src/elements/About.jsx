import React from "react";
import { useTranslation } from "react-i18next";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import CounterOne from "../elements/counters/CounterOne";
import Testimonial from "../elements/Testimonial";
import BrandTwo from "../elements/BrandTwo";
import Technologies from "../elements/Technologies";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

import about from "../assets/images/about/about-3.jpg";
import findingImg from "../assets/images/about/finding-us-01.png";
import teamImg1 from "../assets/images/team/team1.jpg";
import teamImg2 from "../assets/images/team/team2.jpg";

const About = () => {
  const { t } = useTranslation();

  const coreValues = [
    {
      key: "innovation",
      title: t("about.coreValues.innovation.title"),
      description: t("about.coreValues.innovation.description")
    },
    {
      key: "integrity",
      title: t("about.coreValues.integrity.title"),
      description: t("about.coreValues.integrity.description")
    },
    {
      key: "customerCentric",
      title: t("about.coreValues.customerCentric.title"),
      description: t("about.coreValues.customerCentric.description")
    },
    {
      key: "excellence",
      title: t("about.coreValues.excellence.title"),
      description: t("about.coreValues.excellence.description")
    }
  ];

  const whyChooseUs = [
    {
      key: "expertise",
      title: t("about.whyChooseUs.expertise.title"),
      description: t("about.whyChooseUs.expertise.description")
    },
    {
      key: "solutions",
      title: t("about.whyChooseUs.solutions.title"),
      description: t("about.whyChooseUs.solutions.description")
    },
    {
      key: "support",
      title: t("about.whyChooseUs.support.title"),
      description: t("about.whyChooseUs.support.description")
    },
    {
      key: "global",
      title: t("about.whyChooseUs.global.title"),
      description: t("about.whyChooseUs.global.description")
    }
  ];

  const teamMembers = [
    { 
      img: teamImg1, 
      name: t("about.team.member1.name"),
      role: t("about.team.member1.role")
    },
    { 
      img: teamImg2, 
      name: t("about.team.member2.name"),
      role: t("about.team.member2.role")
    }
  ];

  return (
    <React.Fragment>
      <PageHelmet pageTitle={t("about.pageTitle")} />

      <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

      {/* Breadcrumb */}
      <Breadcrumb title={t("about.title")} />

      {/* About Section */}
      <div className="rn-about-area ptb--120 bg_color--1">
        <div className="container">
          <div className="row row--35 align-items-center">
            <div className="col-lg-5">
              <div className="thumbnail">
                <img className="w-100" src={about} alt={t("about.whoWeAre.imageAlt")} />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="about-inner inner">
                <div className="section-title mb--20">
                  <h2 className="title">{t("about.whoWeAre.title")}</h2>
                  <p className="description">
                    {t("about.whoWeAre.description")}
                  </p>
                </div>
                <div className="row mt--30">
                  <div className="col-lg-6 col-md-6">
                    <div className="about-us-list">
                      <h3 className="title">{t("about.mission.title")}</h3>
                      <p>{t("about.mission.description")}</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="about-us-list">
                      <h3 className="title">{t("about.vision.title")}</h3>
                      <p>{t("about.vision.description")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Core Values */}
      <div className="rn-about-area ptb--120 bg_color--5">
        <div className="container">
          <div className="section-title text-center mb--50">
            <h2 className="title">{t("about.coreValues.title")}</h2>
            <p>{t("about.coreValues.subtitle")}</p>
          </div>
          <div className="row">
            {coreValues.map((value, i) => (
              <div className="col-lg-3 col-md-6 col-sm-6" key={i}>
                <div className="about-us-list text-center">
                  <h3 className="title">{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Counters */}
      <div className="rn-counterup-area pb--120 pt--120 bg_color--1">
        <div className="container text-center">
          <div className="section-title mb--40">
            <h2 className="title">{t("about.achievements.title")}</h2>
            <p>{t("about.achievements.subtitle")}</p>
          </div>
          <CounterOne />
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="rn-about-area ptb--120 bg_color--1">
        <div className="container">
          <div className="section-title text-center mb--50">
            <h2 className="title">{t("about.whyChooseUs.title")}</h2>
            <p>{t("about.whyChooseUs.subtitle")}</p>
          </div>
          <div className="row">
            {whyChooseUs.map((item, i) => (
              <div className="col-lg-3 col-md-6 col-sm-6" key={i}>
                <div className="about-us-list text-center">
                  <h3 className="title">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="rn-team-area bg_color--1 ptb--120">
        <div className="container">
          <div className="section-title text-center mb--40">
            <h2 className="title">{t("about.team.title")}</h2>
            <p>{t("about.team.subtitle")}</p>
          </div>
          <div className="row my-team">
            {teamMembers.map((member, i) => (
              <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                <div className="team">
                  <div className="thumbnail">
                    <img className="w-100" src={member.img} alt={member.name} />
                  </div>
                  <div className="content">
                    <h4 className="title">{member.name}</h4>
                    <p className="designation">{member.role}</p>
                  </div>
                  <ul className="social-icon">
                    <li><a href="#"><FaFacebookF /></a></li>
                    <li><a href="#"><FaLinkedinIn /></a></li>
                    <li><a href="#"><FaTwitter /></a></li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="rn-brand-area brand-separation bg_color--5 ptb--120">
        <div className="container">
          <div className="section-title text-center mb--40">
            <h2 className="title">{t("about.technologies.title")}</h2>
            <p>{t("about.technologies.subtitle")}</p>
          </div>
          <Technologies />
        </div>
      </div>

      {/* Testimonials */}
      <div className="rn-testimonial-area bg_color--1 ptb--120">
        <div className="container">
          <Testimonial />
        </div>
      </div>

      {/* Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default About;
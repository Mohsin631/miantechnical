import React from "react";
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
  return (
    <React.Fragment>
      <PageHelmet pageTitle="About Us" />

      <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

      {/* Breadcrumb */}
      <Breadcrumb title={"About Us"} />

      {/* About Section */}
      <div className="rn-about-area ptb--120 bg_color--1">
        <div className="container">
          <div className="row row--35 align-items-center">
            <div className="col-lg-5">
              <div className="thumbnail">
                <img className="w-100" src={about} alt="About Us" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="about-inner inner">
                <div className="section-title mb--20">
                  <h2 className="title">Who We Are</h2>
                  <p className="description">
                    We are a global IT & Engineering solutions provider dedicated to delivering transformative
                    digital experiences and innovative engineering solutions. Our mission is to empower businesses
                    with technology that drives growth, efficiency, and competitive advantage.
                  </p>
                </div>
                <div className="row mt--30">
                  <div className="col-lg-6 col-md-6">
                    <div className="about-us-list">
                      <h3 className="title">Mission</h3>
                      <p>
                        To provide cutting-edge IT & engineering solutions that help businesses innovate and thrive
                        in an ever-evolving digital landscape.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="about-us-list">
                      <h3 className="title">Vision</h3>
                      <p>
                        To be a trusted global technology partner, empowering businesses to achieve operational excellence
                        and sustainability through digital transformation.
                      </p>
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
            <h2 className="title">Our Core Values</h2>
            <p>We live by principles that define our success and your growth.</p>
          </div>
          <div className="row">
            {["Innovation", "Integrity", "Customer-Centric", "Excellence"].map((value, i) => (
              <div className="col-lg-3 col-md-6 col-sm-6" key={i}>
                <div className="about-us-list text-center">
                  <h3 className="title">{value}</h3>
                  <p>
                    {value === "Innovation" && "We embrace change and continuously evolve with technology."}
                    {value === "Integrity" && "We operate with transparency and honesty in all our dealings."}
                    {value === "Customer-Centric" && "Your success is our ultimate priority."}
                    {value === "Excellence" && "We strive for quality and perfection in everything we do."}
                  </p>
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
            <h2 className="title">Our Achievements</h2>
            <p>Trusted by businesses worldwide for delivering value-driven technology solutions.</p>
          </div>
          <CounterOne />
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="rn-about-area ptb--120 bg_color--1">
        <div className="container">
          <div className="section-title text-center mb--50">
            <h2 className="title">Why Choose Us</h2>
            <p>We offer unmatched expertise and a commitment to your success.</p>
          </div>
          <div className="row">
            {[
              { title: "Proven Expertise", desc: "Decades of combined experience in IT & Engineering." },
              { title: "Tailored Solutions", desc: "Customized strategies for your unique business needs." },
              { title: "24/7 Support", desc: "Always here to ensure your operations run smoothly." },
              { title: "Global Reach", desc: "Serving businesses across multiple countries and industries." }
            ].map((item, i) => (
              <div className="col-lg-3 col-md-6 col-sm-6" key={i}>
                <div className="about-us-list text-center">
                  <h3 className="title">{item.title}</h3>
                  <p>{item.desc}</p>
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
            <h2 className="title">Meet Our Experts</h2>
            <p>Our passionate professionals bring technology and innovation together for your success.</p>
          </div>
          <div className="row my-team">
            {[{ img: teamImg1, name: "Najeeb Ullah Mian", role: "CEO" },
              { img: teamImg2, name: "Muhammad Safi Ullah", role: "Director MTI" }
              ].map((member, i) => (
              <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                <div className="team">
                  <div className="thumbnail">
                    <img className="w-100" src={member.img} alt="Team" />
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
            <h2 className="title">Technologies We Work With</h2>
            <p>Our expertise spans across the latest technologies and platforms.</p>
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

      {/* CTA
      <div className="rn-finding-us-area rn-finding-us bg_color--1">
        <div className="inner">
          <div className="content-wrapper">
            <div className="content">
              <h4 className="theme-gradient">Let’s Build the Future Together</h4>
              <p>
                Looking for an IT & Engineering partner who understands your business? We’re here to help.
              </p>
              <a className="rn-btn btn-white" href="/contact">
                Get in Touch
              </a>
            </div>
          </div>
          <div className="thumbnail">
            <div className="image">
              <img src={findingImg} alt="Contact" />
            </div>
          </div>
        </div>
      </div> */}

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

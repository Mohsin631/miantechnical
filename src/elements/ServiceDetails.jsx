import PageHelmet from "../component/common/Helmet";
import ModalVideo from "react-modal-video";
import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import { useTranslation } from "react-i18next";


import serviceImg from "../assets/images/service/service-01.png";
import serviceImg2 from "../assets/images/service/service-02.png";


const ServiceDetails = () => {
  const { t } = useTranslation();
  const { slug } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const serviceData = servicesData(t);
  const service = serviceData.find((item) => item.slug === slug);

  const history = useHistory();

  useEffect(() => {
    if (!service) {
      history.push("/");
    }
  }, [service, history]);

  return (
    <React.Fragment>
      <PageHelmet pageTitle={service.title} />

      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />

      {/* Start Breadcrump Area */}
      <div
        className="rn-page-title-area pt--120 pb--190 bg_image bg_image--17"
        data-black-overlay="5"
      >
        <div className="md:px-12 xl:px-20">
          <div className="row px-3">
            <div className="col-lg-12">
              <div className="rn-page-title text-center pt--100">
                <h2 className="title theme-gradient">{service.title}</h2>
                <p>{service.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrump Area */}

      {/* Start Page Wrapper */}
      <div className="rn-service-details ptb--120 bg_color--1">
        <div className="md:px-12 xl:px-20">
          <div className="row px-3">
            <div className="col-lg-12">
              <div className="service-details-inner">
                <div className="inner">
                  {/* Start Single Area */}
                  <div className="row sercice-details-content pb--80 align-items-center">
                    <div className="col-lg-6 col-12">
                      <div className="thumb">
                        <img
                          className="md:w-[800px] md:h-[700px] xl:w-[800px] xl:h-[600px]"
                          src={service.image1}
                          alt="Service Images"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="details mt_md--30 mt_sm--30">
                        <p>
                          {service.fullDescription}
                        </p>
                        {/* <h4 className="title">Proceess of metel</h4> */}
                        {/* <ul className="liststyle">
                            <li>Yet this above sewed flirted opened ouch</li>
                            <li>Goldfinch realistic sporadic ingenuous</li>
                            <li>
                              Abominable this abidin far successfully then like
                              piquan
                            </li>
                            <li>Risus commodo viverra</li>
                            <li>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                            </li>
                          </ul> */}
                      </div>
                    </div>
                  </div>
                  {/* End Single Area */}

                  {/* Start Single Area */}
                  <div className="row sercice-details-content align-items-center">
                    <div className="col-lg-6 col-12 order-2 order-lg-1">
                      <div className="details mt_md--30 mt_sm--30">
                        <h4 className="title">{t("home.process.workingProcess")}</h4>
                        <ul className="liststyle">
                          {service.process && service.process.length > 0 ? (
                            service.process.map((step, index) => <li key={index}>{step}</li>)
                          ) : (
                            ""
                          )}
                        </ul>
                        <div className="flex my-3">
                          <Link to="/contact">
                            <button className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold text-lg md:text-xl rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-50">
                              {t("home.video.buttonText")}
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12 order-1 order-lg-2">
                      <div className="thumb position-relative">
                        <img
                          className="md:w-[800px] md:h-[700px] xl:w-[800px] xl:h-[600px]"
                          src={service.image2}
                          alt="Service Images"
                        />

                      </div>
                    </div>
                  </div>
                  {/* End Single Area */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Page Wrapper */}

      {/* Start Back To Top */}
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
}
export default ServiceDetails;
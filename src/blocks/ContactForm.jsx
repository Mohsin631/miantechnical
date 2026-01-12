import React from 'react'
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import ContactThree from "../elements/contact/ContactThree";
  import CTASection from '../component/cta/CTASection';

import contactImg from "../assets/images/about/about-6.jpg";

const ContactForm = () => {
    return (
      <>
        <PageHelmet pageTitle="Contact Form" />

        {/* Start Header Area  */}
        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />
        {/* End Header Area  */}

        {/* Start Breadcrump Area */}
        <Breadcrumb title={"Contact Form"} />
        {/* End Breadcrump Area */}

        {/* Start Page Wrapper  */}
        <main className="page-wrapper">
          {/* Start Contact Form  */}
          <div className="rn-contact-form-area ptb--120 bg_color--1">
            <ContactThree
              contactTitle="Contact Us"
              contactImages={contactImg}
            />
          </div>
          {/* Start Contact Form  */}
        </main>
        {/* End Page Wrapper  */}

        {/* Start Back To Top */}
       <div className="backto-top fixed bottom-8 right-8 z-50">
        <ScrollToTop showUnder={160}>
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-105 active:scale-95">
            <FiChevronUp className="text-white text-xl" />
          </div>
        </ScrollToTop>
      </div>
        {/* End Back To Top */}
       
        {/* Start Footer Area  */}
    
        <Footer />
        {/* End Footer Area  */}
      </>
    );
}

export default ContactForm;
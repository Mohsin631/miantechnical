import React from "react";
import "../../assets/scss/footer/footer.css";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import CTASection from '../../component/cta/CTASection';
import logo from "../../assets/images/logo/mt-logo.png";

const Footer = () => {
  return (
    
    <div>
      <CTASection/>
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left: Logo and Description */}
        <div className="footer-column">
          <img src={logo} alt="Logo" className="footer-logo" />

          <p className="footer-description">
            Building innovation through technology. Your vision, our code.
          </p>
        </div>

        {/* Middle: Navigation */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Right: Contact and Socials */}
        <div className="footer-column">
          <h4>Contact</h4>
          <p><Mail size={16} /> info@dhsolutions.com</p>
          <p><Phone size={16} /> +92 300 1234567</p>
          <p><MapPin size={16} /> Bahria Enclave, Islamabad</p>

          <div className="footer-socials">
            <a href="#"><Facebook size={18} /></a>
            <a href="#"><Twitter size={18} /></a>
            <a href="#"><Instagram size={18} /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Mian Technical Incorporated. All rights reserved.
      </div>

    </footer>
    </div>
  );
};

export default Footer;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FiX, FiMenu } from "react-icons/fi";
import { withTranslation } from "react-i18next";

import usFlag from "../../assets/images/flags/us.png";
import frFlag from "../../assets/images/flags/fr.png";
import logoLight from "../../assets/images/logo/mt-logo.png";

class Header extends Component {
  constructor(props) {
    super(props);

    this.menuTrigger = this.menuTrigger.bind(this);
    this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
    this.handleLanguageChange = this.handleLanguageChange.bind(this);

    window.addEventListener("load", function () {
      console.log("All assets are loaded");
    });
  }

  menuTrigger() {
    document.querySelector(".header-wrapper").classList.toggle("menu-open");
  }

  CLoseMenuTrigger() {
    document.querySelector(".header-wrapper").classList.remove("menu-open");
  }

  handleLanguageChange(e) {
    const lang = e.target.value;
    const { i18n } = this.props;
    i18n.changeLanguage(lang);

    // Optional (but nice): close menu on mobile after switching language
    this.CLoseMenuTrigger();
  }

  componentDidMount() {
    // Your existing dropdown click logic - move it here to avoid running on every render
    const elements = document.querySelectorAll(".has-droupdown > a");
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          this.parentElement
            .querySelector(".submenu")
            .classList.toggle("active");
          this.classList.toggle("open");
        };
      }
    }
  }

  render() {
    const { t, i18n } = this.props;
    const { color = "default-color" } = this.props;

    const currentLang = i18n.resolvedLanguage || i18n.language || "en";

    let logoUrl = <img src={logoLight} alt="Mian technical" />;

    return (
      <header
        className={`header-area formobile-menu header--transparent ${color}`}
      >
        <div className="header-wrapper" id="header-wrapper">
          <div className="header-left">
            <div className="logo">
              <a href="/">{logoUrl}</a>
            </div>
          </div>

          <div className="header-right">
            <nav className="mainmenunav d-lg-block">
              <ul className="mainmenu">
                <li>
                  <Link to="/">{t("nav.home")}</Link>
                </li>

                <li>
                  <Link to="/services">{t("nav.services")}</Link>
                </li>

                {/* <li>
                  <Link to="/portfolio">{t("nav.portfolio")}</Link>
                </li> */}

                <li>
                  <Link to="/about">{t("nav.about")}</Link>
                </li>

                <li>
                  <Link to="/blogs">{t("nav.blogs", "Blogs")}</Link>
                </li>

                <li>
                  <Link to="/contact">{t("nav.contact")}</Link>
                </li>

                {/* Language Dropdown */}
                <li className="has-droupdown relative">
                  <a
                    href="#lang"
                    onClick={(e) => e.preventDefault()}
                    className="flex items-center gap-2"
                  >
                    {currentLang.toUpperCase()}
                  </a>

                  <ul
                    className="
      submenu
      absolute
      top-full
      mt-2
      !left-auto
      !right-0
      min-w-[170px]
      bg-white
      text-black
      rounded-md
      shadow-lg
      overflow-hidden
      z-[9999]
    "
                  >
                    <li>
                      <button
                        type="button"
                        className="w-full border-0 flex items-center gap-2 px-3 py-2 text-left hover:bg-black/5"
                        onClick={() => this.props.i18n.changeLanguage("en")}
                      >
                        <img
                          src={usFlag}
                          alt="English"
                          className="w-5 h-auto object-contain"
                        />
                        <span className="text-sm">English</span>
                      </button>
                    </li>

                    <li>
                      <button
                        type="button"
                        className="w-full border-0 flex items-center gap-2 px-3 py-2 text-left hover:bg-black/5"
                        onClick={() => this.props.i18n.changeLanguage("fr")}
                      >
                        <img
                          src={frFlag}
                          alt="English"
                          className="w-5 h-auto object-contain"
                        />
                        <span className="text-sm">Français</span>
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>

            {/* Start Humberger Menu */}
            <div className="humberger-menu d-block d-lg-none pl--20">
              <span
                onClick={this.menuTrigger}
                className="menutrigger text-white"
              >
                <FiMenu />
              </span>
            </div>
            {/* End Humberger Menu */}

            <div className="close-menu d-block d-lg-none">
              <span onClick={this.CLoseMenuTrigger} className="closeTrigger">
                <FiX />
              </span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default withTranslation()(Header);
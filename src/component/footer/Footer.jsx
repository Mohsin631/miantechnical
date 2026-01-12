import React from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import CTASection from "../../component/cta/CTASection";
import logo from "../../assets/images/logo/mt-logo.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div>
      <CTASection />

      <footer className="bg-black text-white">
        {/* Main Footer */}
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid grid-cols-1 gap-20 md:grid-cols-3">

            {/* Left: Logo & Description */}
            <div className="space-y-4">
              <img
                src={logo}
                alt="Logo"
                className="h-14 w-auto"
              />
              <p className="text-sm leading-relaxed text-white">
                {t("footer.description")}
              </p>
            </div>

            {/* Middle: Navigation */}
            <div>
              <h4 className="mb-4 text-lg font-semibold text-white">
                {t("footer.quickLinks.title")}
              </h4>
              <ul className="space-y-2 text-sm list-none p-0">
                <li>
                  <a href="/" className="transition hover:text-white">
                    {t("nav.home")}
                  </a>
                </li>
                <li>
                  <a href="/services" className="transition hover:text-white">
                    {t("nav.services")}
                  </a>
                </li>
                <li>
                  <a href="/projects" className="transition hover:text-white">
                    {t("nav.projects")}
                  </a>
                </li>
                <li>
                  <a href="/about" className="transition hover:text-white">
                    {t("nav.about")}
                  </a>
                </li>
                <li>
                  <a href="/contact" className="transition hover:text-white">
                    {t("nav.contact")}
                  </a>
                </li>
              </ul>
            </div>

            {/* Right: Contact & Socials */}
            <div>
              <h4 className="mb-4 text-lg font-semibold text-white">
                {t("footer.contact.title")}
              </h4>

              <div className="space-y-3 text-sm">
                <p className="flex items-center gap-2">
                  <Mail size={16} className="text-red-500" />
                  {t("footer.contact.email")}
                </p>
                <p className="flex items-center gap-2">
                  <Phone size={16} className="text-red-500" />
                  {t("footer.contact.phone")}
                </p>
                <p className="flex items-center gap-2">
                  <MapPin size={16} className="text-red-500" />
                  {t("footer.contact.location")}
                </p>
              </div>

              <div className="mt-6 flex gap-4">
                <a
                  href="#"
                  className="rounded-full bg-slate-800 p-2 text-slate-300 transition hover:bg-red-600 hover:text-white"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="rounded-full bg-slate-800 p-2 text-slate-300 transition hover:bg-red-600 hover:text-white"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="#"
                  className="rounded-full bg-slate-800 p-2 text-slate-300 transition hover:bg-red-600 hover:text-white"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-4 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} {t("footer.copyright")}
        </div>
      </footer>
    </div>
  );
};

export default Footer;

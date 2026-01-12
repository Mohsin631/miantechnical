import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import homeVideo from "../assets/video/home-video.mp4";

const VideoSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* Video Container - Full height on md and above, reduced on mobile */}
      <div className="relative h-[40vh] sm:h-[70vh] md:h-screen">
        <video
          className="absolute inset-0 w-full h-full object-cover brightness-[0.6]"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={homeVideo} type="video/mp4" />
          {t("home.video.fallback")}
        </video>
        
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex text-center items-center justify-center px-4 sm:px-6 md:px-8">
          <div className="max-w-7xl w-full">
            <div className="bg-black/40 backdrop-blur-md rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 shadow-2xl border border-white/10 mx-auto">
              {/* Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                {t("home.video.title")}
              </h1>
              
              {/* Subtitle */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8 lg:mb-10 leading-relaxed max-w-3xl mx-auto">
                {t("home.video.subtitle")}
              </p>

              {/* CTA Button */}
              <a href="/contact" className="cta-btn text-white"> {t("footer.cta.btnText")}</a>
            
            </div>
          </div>
        </div>

        {/* Optional: Scroll Indicator - Hidden on mobile */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 animate-bounce hidden md:block">
          <div className="flex flex-col items-center">
            <span className="text-white/70 text-sm mb-2">Scroll</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
import React, { useState, useEffect, useCallback } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useTranslation } from "react-i18next";

const Testimonial = () => {
  const { t } = useTranslation();
  const [tabIndex, setTabIndex] = useState(0);
  
  const testimonials = useCallback(() => [
    {
      text: t("testimonials.testimonial1.text"),
      name: t("testimonials.testimonial1.name"),
      role: t("testimonials.testimonial1.role"),
    },
    {
      text: t("testimonials.testimonial2.text"),
      name: t("testimonials.testimonial2.name"),
      role: t("testimonials.testimonial2.role"),
    },
    {
      text: t("testimonials.testimonial3.text"),
      name: t("testimonials.testimonial3.name"),
      role: t("testimonials.testimonial3.role"),
    },
    {
      text: t("testimonials.testimonial4.text"),
      name: t("testimonials.testimonial4.name"),
      role: t("testimonials.testimonial4.role"),
    },
    {
      text: t("testimonials.testimonial5.text"),
      name: t("testimonials.testimonial5.name"),
      role: t("testimonials.testimonial5.role"),
    },
    {
      text: t("testimonials.testimonial6.text"),
      name: t("testimonials.testimonial6.name"),
      role: t("testimonials.testimonial6.role"),
    },
    {
      text: t("testimonials.testimonial7.text"),
      name: t("testimonials.testimonial7.name"),
      role: t("testimonials.testimonial7.role"),
    },
    {
      text: t("testimonials.testimonial8.text"),
      name: t("testimonials.testimonial8.name"),
      role: t("testimonials.testimonial8.role"),
    },
  ], [t]);

  useEffect(() => {
    const autoPlayInterval = setInterval(() => {
      setTabIndex((prevIndex) => (prevIndex + 1) % testimonials().length);
    }, 4000);

    return () => clearInterval(autoPlayInterval);
  }, [testimonials]);

  const testimonialData = testimonials();

  return (
    <div className="rn-testimonial-wrapper">
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        {/* Testimonial Panels */}
        {testimonialData.map((item, index) => (
          <TabPanel key={index}>
            <div className="rn-testimonial-content text-center fade-in">
              <div className="inner">
                <p>"{item.text}"</p>
              </div>
              <div className="author-info">
                <h6>
                  <span>{item.name} </span> - {item.role}
                </h6>
              </div>
            </div>
          </TabPanel>
        ))}

        {/* Dot Navigation */}
        <TabList className="testimonial-dot-nav">
          {testimonialData.map((_, i) => (
            <Tab key={i}>
              <span className={`dot ${tabIndex === i ? "active" : ""}`}></span>
            </Tab>
          ))}
        </TabList>
      </Tabs>
    </div>
  );
};

export default Testimonial;
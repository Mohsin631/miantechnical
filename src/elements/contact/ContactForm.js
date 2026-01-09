import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import emailjs from 'emailjs-com';

const Result = () => {
  const { t } = useTranslation();
  
  return (
    <p className="success-message">
      {t("contactForm.successMessage")}
    </p>
  )
}

function ContactForm({ props }) {
  const { t } = useTranslation();
  const [result, showresult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_ypnnnso',
        'template_t74gdkt',
        e.target,
        'eJt0tnFTAOP1nLjHy'
      )
      .then((result) => {
        console.log(result.text);
      },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showresult(true);
  };

  setTimeout(() => {
    showresult(false);
  }, 5000);

  return (
    <form action="" onSubmit={sendEmail}>
      <div className="rn-form-group">
        <input
          type="text"
          name="fullname"
          placeholder={t("contactForm.fields.name.placeholder")}
          required
        />
      </div>

      <div className="rn-form-group">
        <input
          type="email"
          name="email"
          placeholder={t("contactForm.fields.email.placeholder")}
          required
        />
      </div>

      <div className="rn-form-group">
        <input
          type="text"
          name="phone"
          placeholder={t("contactForm.fields.phone.placeholder")}
          required
        />
      </div>

      <div className="rn-form-group">
        <input
          type="text"
          name="subject"
          placeholder={t("contactForm.fields.subject.placeholder")}
          required
        />
      </div>

      <div className="rn-form-group">
        <textarea
          name="message"
          placeholder={t("contactForm.fields.message.placeholder")}
          required
        >
        </textarea>
      </div>

      <div className="rn-form-group">
        <button 
          className="rn-button-style--2 btn-solid" 
          type="submit" 
          value="submit" 
          name="submit" 
          id="mc-embedded-subscribe"
        >
          {t("contactForm.submitButton")}
        </button>
      </div>

      <div className="rn-form-group">
        {result ? <Result /> : null}
      </div>
    </form>
  )
}

export default ContactForm;
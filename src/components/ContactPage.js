import React from "react";
import ContactForm from "./ContactPage/ContactForm";
import MapComponent from "./ContactPage/MapComponent";

const ContactPage = () => {
  return (
    <div className="contact-page-container">
      {/* You can add more styling and structure here if needed */}

      <ContactForm />
      <MapComponent />

      {/* You can add more components or HTML elements below if required */}
    </div>
  );
};

export default ContactPage;

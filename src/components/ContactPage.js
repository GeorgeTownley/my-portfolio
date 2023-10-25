import React from "react";
import ContactForm from "./ContactPage/ContactForm";
import MapComponent from "./ContactPage/MapComponent";

function ContactPage() {
  return (
    <div className="contact-page" id="contact">
      <ContactForm />
      <MapComponent />
    </div>
  );
}

export default ContactPage;

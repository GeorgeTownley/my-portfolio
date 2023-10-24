import emailjs from "emailjs-com";

function ContactForm() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0qoj39f",
        "template_eq27noq",
        e.target,
        "fd06ce-N3gMWxx2pm"
      )
      .then(
        (result) => {
          alert("Message sent, we will get back to you shortly");
        },
        (error) => {
          alert(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="contact-form">
      <form onSubmit={sendEmail}>
        <input type="text" placeholder="Name" name="name" />
        <input type="email" placeholder="Email" name="email" />
        <textarea placeholder="Your Message" name="message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactForm;

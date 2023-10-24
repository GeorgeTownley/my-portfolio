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
    <form onSubmit={sendEmail}>
      <input type="text" name="name" placeholder="Name" />
      <input type="email" name="email" placeholder="Email" />
      <input type="text" name="subject" placeholder="Subject" />
      <textarea name="message" placeholder="Message"></textarea>
      <input type="submit" value="Send" />
    </form>
  );
}
export default ContactForm;

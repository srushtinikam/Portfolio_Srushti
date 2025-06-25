import React, { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'Srushti_Nikam',      // 🔁 Replace this
      form.current,
      '8M_u8lJpPxClwPUna'       // 🔁 Replace this
    )
    .then((result) => {
      alert("✅ Message sent successfully!");
    }, (error) => {
      alert("❌ Failed to send message.");
    });

    e.target.reset();
  };

  return (
    <section id="contact" style={{ padding: "2rem" }}>
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Name" required /><br />
        <input type="email" name="email" placeholder="Your Email" required /><br />
        <textarea name="message" placeholder="Message" required /><br />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

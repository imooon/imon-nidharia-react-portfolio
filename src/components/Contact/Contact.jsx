import React from 'react';
import './Contact.css'; // Ensure you're importing the correct CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="sectionTitle">Reach Out!</h1>
      <form action="https://formspree.io/f/xwpeeakn" method="post">
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input type="text" name="name" id="name" placeholder="Name" required />
        </div>

        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input type="text" name="email" id="email" placeholder="Email" required />
        </div>

        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea name="message" id="message" placeholder="Write your message here..." required />
        </div>
        <input className="submit-btn" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Contact;

import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-background">
      <div className="contact-overlay">
        <div className="contact-container">
          <h2>Contact Us</h2>
          <p>If you have any questions, suggestions, or feedback, feel free to reach out.</p>
          <form className="contact-form">
            <div className="form-group">
              <label>Name:</label>
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" placeholder="you@example.com" required />
            </div>
            <div className="form-group">
              <label>Message:</label>
              <textarea placeholder="Your message..." rows="5" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
          <p className="contact-email">📧 Email: support@covid-dashboard.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

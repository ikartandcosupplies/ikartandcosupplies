import React, { useEffect, useState } from 'react';
import '../assets/css/Contact.css';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    if (window.location.hash === '#contact') {
      setTimeout(() => {
        const element = document.getElementById('contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.info('Sending message...', { autoClose: 2000 });

    emailjs.send(
      'service_iz0tys1', // Replace with your EmailJS service ID
      'template_marphja', // Replace with your EmailJS template ID
      formData,
      'loWnrOpL0S7HH6xJv' // Replace with your EmailJS public key
    )
      .then((response) => {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, (error) => {
        toast.error('Failed to send message. Please try again later.');
        console.error('EmailJS Error:', error);
      });
  };

  return (
    <section className="wc-contact-section" id="contact">
      <div className="wc-contact-container">

        {/* LEFT SIDE */}
        <div className="wc-contact-content">
          <h4 className="wc-sub-title">Get in Touch</h4>
          <h2 className="wc-main-title">We’d Love To Hear From You</h2>
          <p className="wc-contact-desc">
            <strong>Timber Grades:</strong> 7, 316, 3, 2021, 1803 <br />
            <strong>Thickness:</strong> 3 inch & above diameter <br /><br />
            Looking for a trusted partner for wood procurement, construction timber supply, or industrial raw material?
            <strong> ikartandco</strong> is here to support farmers, industries, and contractors with reliable, honest, and professional service.
          </p>

          <strong className="wc-sub-title">Startup: </strong> Whatsapp & Email Us <br /><br />

          <div className="wc-simple-details">
            <div className="wc-detail-item">
              <strong>Email:</strong> ikartandco@gmail.com
            </div>
            <div className="wc-detail-item">
              <strong>Phone:</strong> +91 9154438666
            </div>
            <div className="wc-detail-item">
              <strong>Address:</strong> Saraswathi nilayam, 8-4/6, Padmavathipuram, Tirupati, Andhra Pradesh 517503
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="wc-form-wrapper">
          <form onSubmit={handleSubmit} className="wc-form">

            <div className="wc-form-group">
              <label className="wc-label">Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                required
                onChange={handleChange}
                value={formData.name}
                className="wc-input"
              />
            </div>

            <div className="wc-form-group">
              <label className="wc-label">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                required
                onChange={handleChange}
                value={formData.email}
                className="wc-input"
              />
            </div>

            <div className="wc-form-group">
              <label className="wc-label">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="+91 234 567 890"
                onChange={handleChange}
                value={formData.phone}
                className="wc-input"
              />
            </div>

            <div className="wc-form-group">
              <label className="wc-label">Message</label>
              <textarea
                name="message"
                rows="4"
                placeholder="How can we help you?"
                required
                onChange={handleChange}
                value={formData.message}
                className="wc-textarea"
              ></textarea>
            </div>

            <button type="submit" className="wc-submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        draggable
      />
    </section>
  );
};

export default Contact;

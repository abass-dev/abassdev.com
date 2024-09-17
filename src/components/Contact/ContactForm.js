/* eslint-disable object-curly-newline, jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import './ContactForm.css'; // Custom CSS

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false); // Loading state
  const [recaptchaToken, setRecaptchaToken] = useState(null); // reCAPTCHA token

  // Replace with your reCAPTCHA site key from the Google admin console
  const { REACT_APP_RECAPTCHA_SITE_KEY: RECAPTCHA_SITE_KEY } = process.env;

  const validate = () => {
    const newErrors = {};

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Validate subject
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    // Validate reCAPTCHA
    if (!recaptchaToken) {
      newErrors.recaptcha = 'Please complete the reCAPTCHA';
    }

    return newErrors;
  };

  const handleChange = ({ target: { name, value } }) => {
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '', // Clear error on input change
    });
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token); // Set reCAPTCHA token
    setErrors({
      ...errors,
      recaptcha: '', // Clear reCAPTCHA error on successful verification
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const { name, email, subject, message } = formData;

    const templateParams = {
      user_name: name.trim(),
      to_name: 'Abass Dev',
      from_name: name.trim(),
      from_subject: subject.trim(),
      from_email: email.trim(),
      reply_to: email.trim(),
      message: message.trim(),
    };

    setLoading(true); // Set loading to true during send

    try {
      await emailjs.send(
        'service_jebasxm', // Replace with your EmailJS Service ID
        'template_mduuz2e', // Replace with your EmailJS Template ID
        templateParams,
        '9QHGoEPmDaBELUbZn', // Replace with your EmailJS Public Key
      );

      setStatus('SUCCESS');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setRecaptchaToken(null); // Reset reCAPTCHA token after successful submission
    } catch (err) {
      setStatus('FAILED');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="subject">Subject</label>
        <input
          id="subject"
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        {errors.subject && <p className="text-red-500">{errors.subject}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        {errors.message && <p className="text-red-500">{errors.message}</p>}
      </div>

      <div className="mb-4">
        {/* reCAPTCHA */}
        <ReCAPTCHA
          sitekey={RECAPTCHA_SITE_KEY} // Your reCAPTCHA site key
          onChange={handleRecaptchaChange}
        />
        {errors.recaptcha && <p className="text-red-500">{errors.recaptcha}</p>}
      </div>

      <button type="submit" disabled={loading}>
        {loading ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'SUCCESS' && (
        <p className="text-green-500">Message sent successfully!</p>
      )}
      {status === 'FAILED' && (
        <p className="text-red-500">Failed to send message.</p>
      )}
    </form>
  );
};

export default ContactForm;

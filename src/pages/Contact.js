import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';
import ContactForm from '../components/Contact/ContactForm';
import InArticle from '../utils/InArticle';

const Contact = () => (
  <Main title="Contact" description="Contact Abass Dev">
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2>
            <Link to="/contact">Contact</Link>
          </h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel welcome to connect. You can send me an email at: </p>
        <EmailLink />
        <br />
        <br />
        <ContactForm />
      </div>
      <ContactIcons />
      <InArticle />
    </article>
  </Main>
);

export default Contact;

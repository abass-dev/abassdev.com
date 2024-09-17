import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import Cell from '../components/Projects/Cell';
import homePojectdata from '../data/home-projects';
import EmailLink from '../components/Contact/EmailLink';
import ContactForm from '../components/Contact/ContactForm';
import FAQList from '../components/FAQ/FAQList';
import Skills from '../components/Resume/Skills';
import { categories, skills } from '../data/resume/skills';
import InArticle from '../utils/InArticle';

// NOTE: sections are displayed in order defined.
const sections = {
  Skills: () => <Skills skills={skills} categories={categories} />,
};

const Index = () => (
  <Main description="Abass Dev's personal website.">
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2>
            <Link to="/projects">Projects</Link>
          </h2>
          <p>Some projects I’m actually proud of.</p>
        </div>
      </header>
      {homePojectdata.map((project) => (
        <Cell data={project} key={project.title} />
      ))}
      <ul className="actions">
        <li>
          <Link to="/projects" className="button">
            See More Projects
          </Link>
        </li>
      </ul>
      <InArticle />
    </article>

    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2>
            <Link to="/resume">SKILLS</Link>
          </h2>
        </div>
      </header>
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
      <ul className="actions">
        <li>
          <Link to="/resume" className="button">
            Learn More
          </Link>
        </li>
      </ul>
      <InArticle />
    </article>

    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2>
            <Link to="/contact">Contact</Link>
          </h2>
        </div>
      </header>
      <div className="email-at">
        <p>
          We value your opportunities, suggestions, and feedback. If you’re
          interested in collaborating with us or have any inquiries, please feel
          free to reach out using the contact information provided below. We
          look forward to connecting with you.
        </p>
        <br />
        <p>You can also send me an email at: </p>
        <EmailLink />
        <br />
        <br />
        <ContactForm />
      </div>
    </article>
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2>FAQ’s</h2>
        </div>
      </header>
      <FAQList />
      <InArticle />
    </article>
  </Main>
);

export default Index;

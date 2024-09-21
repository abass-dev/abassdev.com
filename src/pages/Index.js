/* eslint-disable react/jsx-indent */

import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import Cell from '../components/Projects/Cell';
import BlogCell from '../components/Blog/Cell';
import homePojectdata from '../data/home-projects';
import homeBlogdata from '../data/home-blog';
import EmailLink from '../components/Contact/EmailLink';
import ContactForm from '../components/Contact/ContactForm';
import FAQList from '../components/FAQ/FAQList';
import Skills from '../components/Resume/Skills';
import { categories, skills } from '../data/resume/skills';
import InArticle from '../utils/InArticle';
import ContactIcons from '../components/Contact/ContactIcons';

// NOTE: sections are displayed in order defined.
const sections = {
  Skills: () => <Skills skills={skills} categories={categories} />,
};

const Index = () => (
  <Main homePage description="Abass Dev's personal website.">
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
    </article>
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2>
            <a href="/https://blog.abassdev.com">Blog posts</a>
          </h2>
          <p>Some thoughts and ideas I’m actually excited to share.</p>
        </div>
      </header>
      {homeBlogdata.map((blog) => (
        <BlogCell data={blog} key={blog.title} />
      ))}
      <ul className="actions">
        <li>
          <a href="https://blog.abassdev.com" className="button">
            More blog post
          </a>
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
        <p>Use the form below or email me at: </p>
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
    </article>
     <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; 2021 - {new Date().getFullYear()} Abass Dev.{' '}
        <Link to="/copyright">abassdev.com</Link>.
      </p>
     </section>
  </Main>
);

export default Index;

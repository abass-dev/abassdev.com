import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';
import InArticle from '../../utils/InArticle';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/abassdev.png`} alt="" />
      </Link>
      <header>
        <h2>Abass Dev</h2>
        <p>
          <a href="mailto:abass@abassdev.com">abass@abassdev.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I’m Abass Dev. I’m a self-taught web and mobile app developer with
        extensive experience. I enjoy sharing insights through my{' '}
        <a href="https://blog.abassdev.com">blog</a> and actively contribute to{' '}
        <a href="https://github.com/abass-dev">open-source</a> projects. I’m
        also proud to have developed the{' '}
        <a href="https://github.com/nigaphp">NigaPHP framework</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
      <InArticle />
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; 2021 - {new Date().getFullYear()} Abass Dev.{' '}
        <Link to="/copyright">abassdev.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;

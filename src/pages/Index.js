import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import Cell from '../components/Projects/Cell';
import homePojectdata from '../data/home-projects';

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
    </article>
  </Main>
);

export default Index;

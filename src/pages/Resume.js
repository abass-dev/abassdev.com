import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';

import courses from '../data/resume/courses';
import { skills, categories } from '../data/resume/skills';

// NOTE: sections are displayed in order defined.
const sections = {
  Skills: () => <Skills skills={skills} categories={categories} />,
  Courses: () => <Courses data={courses} />,
};

const Resume = () => (
  <Main
    title="Resume"
    description="Here are the skills and technologies Abass Dev bring to the table"
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2>
            <Link to="resume">Resume</Link>
          </h2>
          <div className="link-container">
            {Object.keys(sections).map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>
            ))}
          </div>
        </div>
      </header>
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
    </article>
  </Main>
);

export default Resume;

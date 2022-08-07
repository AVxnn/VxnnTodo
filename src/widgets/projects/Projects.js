import React from 'react';
import './style.css'
import Project from "../project/project";

const Projects = () => {
  return (
    <>
      <section className='project-container'>
        <section className='project-header'>
          <section className='project-left'>
            <h2 className='header-title'>Projects</h2>
            <span className='header-subtitle'>You have <span className='subtitle-number'>4</span> Projects</span>
          </section>
          <button className='project-right-button'>+ Add</button>
        </section>
        <section>
          <Project />
        </section>
      </section>
    </>
  );
};

export default Projects;

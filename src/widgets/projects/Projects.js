import React from 'react';
import './style.css'
import Project from "../project/project";

const data = [
  {
    title: "Vxnn Peterburgs Front end",
    progress: 45,
    members: [52354623, 243646, 232362351]
  }
]

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
        <section className='projects'>
          {
            data.map((e) => (
              <Project title={e.title} progress={e.progress} members={e.members}/>
            ))
          }
        </section>
      </section>
    </>
  );
};

export default Projects;

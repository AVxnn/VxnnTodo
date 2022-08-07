import React from 'react';
import dots from './img/dots.png'
import avatar from '../headerProfile/img/avatar.png'
import './style.css'

const Project = () => {
  return (
    <>
      <section className='project'>
        <section className='project-header'>
          <h3 className='header-title'>Vxnn Peterburgs Front end</h3>
          <button className='header-button'>
            <img className='button-img' src={dots} alt="settings"/>
          </button>
        </section>
        <section className='progress'>
          <section className='progress-header'>
            <span className='progress-title'>Progress</span>
            <span className='progress-proz'>49%</span>
          </section>
          <section className='progress-down'>
            <section className='progress-up'></section>
          </section>
        </section>
        <section className='members'>
          <section className='members-header'>
            <span className='members-title'>Members</span>
          </section>
          <section className='members-users'>
            <img className='members-avatar' src={avatar} alt=""/>
            <img className='members-avatar' src={avatar} alt=""/>
            <img className='members-avatar' src={avatar} alt=""/>
          </section>
        </section>
      </section>
    </>
  );
};

export default Project;

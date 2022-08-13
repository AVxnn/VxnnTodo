import React from 'react';
import dots from './img/dots.png'
import avatar from '../headerProfile/img/avatar.png'
import './style.css'


const Project = ({data}) => {
  return (
    <>
      <section className='project' style={{backgroundColor: `${data.color}`}}>
        <section className='project-header'>
          <h3 className='header-title'>{data.name}</h3>
          <button className='header-button'>
            <img className='button-img' src={dots} alt="settings"/>
          </button>
        </section>
        <section className='progress'>
          <section className='progress-header'>
            <span className='progress-title'>Progress</span>
            <span className='progress-proz'>{data.progress}%</span>
          </section>
          <section className='progress-down'>
            <section className='progress-up' style={{width: `${data.progress ? data.progress : '0'} %`}}></section>
          </section>
        </section>
        <section className='members'>
          <section className='members-header'>
            <span className='members-title'>Members</span>
          </section>
          <section className='members-users'>
            {
              data.members ? data.members.map((e) => (
                <img className='members-avatar' src={e.photoUrl} alt="avatar"/>
              )) : null
            }
          </section>
        </section>
      </section>
    </>
  );
};

export default Project;

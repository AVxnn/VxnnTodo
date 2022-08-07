import React from 'react';
import dots from "../project/img/dots.png";
import './style.css'

const Tasks = () => {
  return (
    <>
      <section className='tasks-bg'>
        <section className='tasks-container'>
          <section className='tasks-header'>
            <section className='tasks-left'>
              <h2 className='header-title'>Today’s Task</h2>
              <span className='header-subtitle'>Wednesday, <span className='subtitle-number'>30</span> july</span>
            </section>
            <button className='tasks-right-button'>+ New Task</button>
          </section>
          <section>

          </section>
          <section className='tasks-list'>
            <section className='list-item'>
              <section className='item-header'>
                <section className='header-left'>
                  <h3 className='header-title'>Write a new task</h3>
                  <span className='header-subtitle'>Vxnn Peterburgs Front end</span>
                </section>
                <input id='check' className='item-check' type="checkbox"/>
                <label htmlFor="check">
                  <div className='item-check_label'></div>
                </label>
              </section>
              <section className='item-footer'>
                <span className='footer-date'>today</span>
              </section>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default Tasks;

import React from 'react';
import './style.css'
import emp from './img/emp.png'

const Empty = () => {
  return (
    <>
      <section className='empty'>
        <img src={emp} alt="empty"/>
      </section>
    </>
  );
};

export default Empty;

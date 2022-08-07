import React from 'react';
import errorImg from './img/error.png'
import './style.css'

const Alert = ({error, text}) => {
  if (error) {
    return (
      <>
        <section className='alert'>
          <section className='title'>
            <section className='left-content'>
              <img className='img' src={errorImg} alt="Error img"/>
              <h4 className='title-h4'>Error</h4>
            </section>
            <div className='status'></div>
          </section>
          <p className='subtitle'>{error}</p>
        </section>
      </>
    )
  }
  if (text) {
    return (
      <>

      </>
    )
  }
};

export default Alert;

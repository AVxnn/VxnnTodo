import React from 'react';
import './style.css'

const Button = ({children, click}) => {
  return (
    <button onClick={() => click()} className='button'>
      {children}
    </button>
  );
};

export default Button;

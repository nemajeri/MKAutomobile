import React from 'react';

const Button = props => {
  const buttonClass = `btn ${props.className}`;
  return (
    <>
      <button type='submit' className={buttonClass}>
        <svg
          width='180px'
          height='60px'
          viewBox='0 0 180 60'
          className='border'
        >
          <polyline points='179,1 179,59 1,59 1,1 179,1' className='bg-line' />
          <polyline points='179,1 179,59 1,59 1,1 179,1' className='hl-line' />
        </svg>
        <span>{props.children}</span>
      </button>
    </>
  );
};

export default Button;

import React from 'react';

const AlignItem3 = ({ isActive }) => {
  return (
    <div>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10.91 8.77'>
        <defs></defs>
        <g id='Layer_2' data-name='Layer 2'>
          <g
            id='Layer_1-2'
            data-name='Layer 1'
            className={isActive === 'view_3' ? 'cls-2' : 'cls-1'}
          >
            <rect width='1.74' height='8.77' />
            <rect x='2.42' y='4.88' width='8.49' height='1.47' />
            <rect x='2.42' y='2.43' width='8.49' height='1.47' />
            <rect x='2.42' y='7.32' width='8.49' height='1.45' />
            <rect x='2.42' width='8.49' height='1.47' />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default AlignItem3;

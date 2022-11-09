import React from 'react';

const AlignItem2 = ({ isActive }) => {
  return (
    <div>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10.91 8.77'>
        <defs></defs>
        <g id='Layer_2' data-name='Layer 2'>
          <g
            id='Layer_1-2'
            data-name='Layer 1'
            className={isActive === 'mka__default-layout-left__sidebar' ? 'mka__icon-selected' : 'mka__icon-unselected'}
          >
            <rect
              x='9.17'
              width='1.74'
              height='8.77'
              transform='translate(20.08 8.77) rotate(180)'
            />
            <rect x='5.86' y='2.42' width='1.96' height='1.47' />
            <rect x='5.86' y='4.87' width='1.96' height='1.47' />
            <rect x='5.86' width='1.96' height='1.45' />
            <rect x='5.86' y='7.31' width='1.96' height='1.47' />
            <rect x='2.93' y='2.42' width='1.96' height='1.47' />
            <rect x='2.93' y='4.87' width='1.96' height='1.47' />
            <rect x='2.93' width='1.96' height='1.45' />
            <rect x='2.93' y='7.31' width='1.96' height='1.47' />
            <rect y='2.42' width='1.96' height='1.47' />
            <rect y='4.87' width='1.96' height='1.47' />
            <rect width='1.96' height='1.45' />
            <rect y='7.31' width='1.96' height='1.47' />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default AlignItem2;

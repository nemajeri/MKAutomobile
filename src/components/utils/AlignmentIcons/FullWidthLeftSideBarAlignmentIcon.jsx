import React from 'react';

const FullWidthLeftSideBarAlignmentIcon = ({ isActiveClass }) => {
  return (
    <i>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10.91 8.77'>
        <defs></defs>
        <g id='Layer_2' data-name='Layer 2'>
          <g
            id='Layer_1-2'
            data-name='Layer 1'
            className={
              isActiveClass === 'mka__full-width-layout-left__sidebar'
                ? 'mka__icon-selected'
                : 'mka__icon-unselected'
            }
          >
            <rect
              x='9.17'
              width='1.74'
              height='8.77'
              transform='translate(20.08 8.77) rotate(180)'
            />
            <rect y='2.43' width='8.49' height='1.47' />
            <rect y='4.87' width='8.49' height='1.47' />
            <rect width='8.49' height='1.45' />
            <rect y='7.31' width='8.49' height='1.47' />
          </g>
        </g>
      </svg>
    </i>
  );
};

export default FullWidthLeftSideBarAlignmentIcon;

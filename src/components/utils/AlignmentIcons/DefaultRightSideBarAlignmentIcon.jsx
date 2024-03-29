import React from 'react';

const DefaultRightSideBarAlignmentIcon = ({ isActiveClass }) => {
  return (
    <i>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10.91 8.77'>
        <g id='Layer_2' data-name='Layer 2'>
          <g
            id='Layer_1-2'
            data-name='Layer 1'
            className={
              isActiveClass === 'mka__default-layout-right__sidebar'
                ? 'mka__icon-selected'
                : 'mka__icon-unselected'
            }
          >
            <rect width='1.74' height='8.77' />
            <rect x='3.09' y='4.88' width='1.96' height='1.47' />
            <rect x='3.09' y='2.43' width='1.96' height='1.47' />
            <rect x='3.09' y='7.32' width='1.96' height='1.45' />
            <rect x='3.09' width='1.96' height='1.47' />
            <rect x='6.02' y='4.88' width='1.96' height='1.47' />
            <rect x='6.02' y='2.43' width='1.96' height='1.47' />
            <rect x='6.02' y='7.32' width='1.96' height='1.45' />
            <rect x='6.02' width='1.96' height='1.47' />
            <rect x='8.95' y='4.88' width='1.96' height='1.47' />
            <rect x='8.95' y='2.43' width='1.96' height='1.47' />
            <rect x='8.95' y='7.32' width='1.96' height='1.45' />
            <rect x='8.95' width='1.96' height='1.47' />
          </g>
        </g>
      </svg>
    </i>
  );
};

export default DefaultRightSideBarAlignmentIcon;

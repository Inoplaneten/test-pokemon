import { type FC } from 'react'

import { classNames } from 'utils/classNames'

import classes from './IconArrowDown.module.scss'

interface IIconArrowDown {
  active?: boolean
};

export const IconArrowDown: FC<IIconArrowDown> = ({ active }) => (
  <svg
    width='30'
    height='30'
    viewBox='0 0 30 30'
    fill='#000'
    xmlns='http://www.w3.org/2000/svg'
    className={classNames('', {
      [classes.active]: active
    })}
  >
    <path d='M15.0001 20.6251C14.7603 20.6251 14.5203 20.5334
    14.3372 20.3504L4.96225
    10.9754C4.59592 10.609 4.59592 10.0158
    4.96225 9.64975C5.32857 9.28365 5.92178 9.28342
    6.28787 9.64975L15.0001 18.3619L23.7122 9.64975C24.0786
    9.28342 24.6718 9.28342 25.0379 9.64975C25.404
    10.0161 25.4042 10.6093 25.0379 10.9754L15.6629
    20.3504C15.4798 20.5334 15.2398 20.6251 15.0001 20.6251Z'
    />
  </svg>
)

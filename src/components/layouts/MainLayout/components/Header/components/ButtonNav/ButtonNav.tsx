import { type FC } from 'react'

import { classNames } from 'utils/classNames'

import classes from './ButtonNav.module.scss'

interface ButtonNavProps {
  active: boolean
  onActiveNav: () => void
  className?: string
  scroll: boolean
};

export const ButtonNav: FC<ButtonNavProps> = ({
  className,
  active,
  scroll,
  onActiveNav
}) => (
  <button
    type='button'
    className={classNames(classes.buttonNav, {
      [classes.active]: active,
      [classes.scroll]: scroll
    }, [className])}
    aria-label='Visible mobile navigation'
    onClick={onActiveNav}
  >
    <span />
  </button>
)

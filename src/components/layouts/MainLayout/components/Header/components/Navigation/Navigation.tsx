import { type FC } from 'react'
import { NavLink } from 'react-router-dom'

import { classNames } from 'utils/classNames'

import { menu } from './data/menu'

import classes from './Navigation.module.scss'

interface NavigationProps {
  onActiveNav: () => void
  active: boolean
  scroll: boolean
};

export const Navigation: FC<NavigationProps> = ({
  active,
  onActiveNav,
  scroll
}) => (
  menu?.length > 0 &&
  <nav className={classNames(classes.navigation, {
    [classes.active]: active,
    [classes.scroll]: scroll
  })}>
    <ul className={classes.navigation__list}>
      {menu.map(({ path, label }) => (
        <li
          key={path}
          className={classes.navigation__item}
        >
          <NavLink
            to={path}
            onClick={onActiveNav}
            aria-label={`Go to ${label} page`}
            className={({ isActive }) => (
              classNames(classes.nav__link, {
                [classes.active]: isActive
              }, []))
            }
          >
            <span>
              {label}
            </span>
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
)

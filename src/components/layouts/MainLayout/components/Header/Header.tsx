import { type FC, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { routePath } from 'app/config/routeConfig'

import { Container } from 'components/blocks/Container'

import { classNames } from 'utils/classNames'

import { Navigation } from './components/Navigation'
import { ButtonNav } from './components/ButtonNav'

import classes from './Header.module.scss'

export const Header: FC = () => {
  const [isActiveMenu, setActiveMenu] = useState<boolean>(false)
  const [isScroll, setScroll] = useState<boolean>(false)

  const scrollHandler = (): void => {
    const scrollTop = document.documentElement.scrollTop

    if (scrollTop > 1) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)

    return () => { window.removeEventListener('scroll', scrollHandler) }
  }, [isActiveMenu])

  return (
    <header className={classNames(classes.header, {
      [classes.active]: isActiveMenu || isScroll
    })}>
      <Container>
        <div className={classes.headerContent}>
          <Link
            to={routePath.home}
            className={classes.logo}
          >
            Logo
          </Link>
          <Navigation
            active={isActiveMenu}
            scroll={isScroll}
            onActiveNav={() => { setActiveMenu(false) }}
          />
          <ButtonNav
            active={isActiveMenu}
            scroll={isScroll}
            onActiveNav={() => { setActiveMenu(!isActiveMenu) }}
          />
        </div>
      </Container>
    </header>
  )
}

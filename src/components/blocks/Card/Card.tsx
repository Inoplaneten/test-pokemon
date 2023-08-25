/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { forwardRef } from 'react'
import { Link } from 'react-router-dom'

import { classNames } from 'utils/classNames'

import classes from './Card.module.scss'
import { routePath } from 'app/config/routeConfig'

interface CardProps {
  className?: string
  name: string | null
};

export const Card = forwardRef<HTMLAnchorElement, CardProps>(({
  className,
  name
}, ref) => (
  name &&
  <Link
    ref={ref}
    to={`${routePath.pokemons}/${name}`}
    className={classNames(classes.card, {}, [className])}
  >
    <h3 className={classes.card__title}>
      {name}
    </h3>
  </Link>
))

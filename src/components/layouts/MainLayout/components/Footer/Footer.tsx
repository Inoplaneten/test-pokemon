import { type FC } from 'react'

import { Container } from 'components/blocks/Container'

import classes from './Footer.module.scss'

export const Footer: FC = () => {
  const today = new Date()
  const year = today.getFullYear()

  return (
    <div className={classes.footer}>
      <Container>
        <div className={classes.footerContent}>
          <p>
            {year}
          </p>
        </div>
      </Container>
    </div>
  )
}

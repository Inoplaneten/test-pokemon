import { type ReactNode, type FC } from 'react'

import { classNames } from 'utils/classNames'

import { Container } from 'components/blocks/Container'

import classes from './Section.module.scss'

interface SectionProps {
  className?: string
  children: ReactNode
};

export const Section: FC<SectionProps> = ({ className, children }) => (
  <section className={classNames(classes.section, {}, [className])}>
    <Container>
      {children}
    </Container>
  </section>
)

import { type FC } from 'react'

import { Section } from 'components/blocks/Section'

// import classes from './PokemonContent.module.scss';

// interface PokemonContentProps {
//     className?: string;
// };

export const NotFoundSection: FC = () => {
  return (
    <Section>
      <h1>
        Sorry! Page not found!
      </h1>
    </Section>
  )
}

import { type FC, type Ref } from 'react'

import { type IPokemonsStore } from 'store/pokemons/types'

import { classNames } from 'utils/classNames'

import { Card } from 'components/blocks/Card'

import { useAppSelector } from 'hooks/useAppSelector'

import {
  selectErrorPokemons,
  selectLoadingPokemons
} from 'store/pokemons/selectors'

import classes from './PokemonsList.module.scss'

export enum POKEMONS_STYLES {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface PokemonsListProps {
  pokemons: IPokemonsStore['pokemons']['results']
  variant?: POKEMONS_STYLES
  className?: string
  innerRef?: Ref<HTMLAnchorElement>
};

export const PokemonsList: FC<PokemonsListProps> = ({
  className,
  variant = POKEMONS_STYLES.PRIMARY,
  pokemons,
  innerRef
}) => {
  const pokemonsError: IPokemonsStore['error'] = useAppSelector(
    selectErrorPokemons
  )

  const pokemonsLoading: IPokemonsStore['loading'] = useAppSelector(
    selectLoadingPokemons
  )

  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  pokemonsLoading && (
    <div>
      Loading ...
    </div>
  )

  Boolean(pokemonsError) && (
    <div>
      {pokemonsError}
    </div>
  )

  return (
    !((pokemons?.length) === 0) &&
    <div className={classNames(classes.pokemons, {
      [classes[variant]]: variant
    }, [className])}>
      {pokemons.map(({ name }, index) => (
        <Card
          key={index}
          ref={pokemons.length === index + 1 ? innerRef : undefined}
          name={name}
        />
      ))}
    </div>
  )
}

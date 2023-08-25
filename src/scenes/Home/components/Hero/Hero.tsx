import { useEffect, type FC } from 'react'

import { Section } from 'components/blocks/Section'

import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'

import { type IPokemonsStore } from 'store/pokemons/types'
import { loadPokemons } from 'store/pokemons/action'
import { selectDataPokemons } from 'store/pokemons/selectors'
import { PokemonsList } from 'components/blocks/PokemonsList'

import classes from './Hero.module.scss'

export const Hero: FC = () => {
  const dispatch = useAppDispatch()
  const pokemons: IPokemonsStore['pokemons'] = useAppSelector(
    selectDataPokemons
  )

  useEffect(() => {
    void dispatch(loadPokemons({ offset: 9, limit: 6 }))
  }, [dispatch])

  return (
    <Section>
      <h1 className={classes.title}>
        New Pokemons
      </h1>
      <PokemonsList pokemons={pokemons.results} />
    </Section>
  )
}

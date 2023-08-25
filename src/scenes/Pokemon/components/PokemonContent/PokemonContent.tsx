/* eslint-disable @typescript-eslint/naming-convention */
import { type FC, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { type IParamsPokemon } from 'types/IParamsPokemon'

import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'

import { loadPokemon } from 'store/pokemon/action'
import { selectDataPokemon } from 'store/pokemon/selectors'

import { Section } from 'components/blocks/Section'
import { Image } from 'components/blocks/Image'

import classes from './PokemonContent.module.scss'

export const PokemonContent: FC = () => {
  const { name } = useParams<IParamsPokemon>()
  const dispatch = useAppDispatch()
  const pokemon = useAppSelector(selectDataPokemon)

  useEffect(() => {
    if (name !== undefined) {
      void dispatch(loadPokemon(name))
    }
  }, [dispatch, name])

  return (
    <Section>
      <div className={classes.content}>
        <div className={classes.info}>
          <h1 className={classes.info__title}>
            {pokemon.name}
          </h1>
          <ul className={classes.moves}>
            {pokemon.moves.filter((_, index) => index < 20).map(({ move }) => (
              <li
                key={move.name}
                className={classes.moves__item}
              >
                {move.name}
              </li>
            ))}
          </ul>
          <ul className={classes.stats}>
            {pokemon.stats.map(({ stat, base_stat }) => (
              <li
                key={stat.name}
                className={classes.stats__item}
              >
                <span className={classes.stats__label}>
                  {`${stat.name}:`}
                </span>
                <span>
                  {base_stat}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className={classes.image}>
          <Image
            src={pokemon.image ?? undefined}
            alt={pokemon.name ?? undefined}
          />
        </div>
      </div>
    </Section>
  )
}

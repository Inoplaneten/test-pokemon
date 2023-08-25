import { useEffect, type FC, useRef } from 'react'

import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import { useForm } from 'hooks/useForm'

import { InputSearch } from 'components/ui/InputSearch'
import { Form } from 'components/ui/Form'
import { Select } from 'components/ui/Select'
import { Section } from 'components/blocks/Section'
import { PokemonsList, POKEMONS_STYLES } from 'components/blocks/PokemonsList'

import { useScrollPagination } from 'hooks/useScrollPagination'

import { type IPokemonsStore } from 'store/pokemons/types'
import {
  loadPokemons,
  loadMorePokemons,
  loadAllTypesPokemons,
  setDataSearchPokemonsAction
} from 'store/pokemons/action'
import {
  selectDataPokemons,
  selectLoadingPokemons
} from 'store/pokemons/selectors'

import classes from './PokemonsSection.module.scss'

export const PokemonsSection: FC = () => {
  const dispatch = useAppDispatch()
  const pokemons: IPokemonsStore['pokemons'] = useAppSelector(
    selectDataPokemons
  )

  const pokemonsLoading: IPokemonsStore['loading'] = useAppSelector(
    selectLoadingPokemons
  )

  const { form, onChange, onSelected } = useForm({
    search: {
      name: 'search',
      value: ''
    },
    pokemonsTypes: {
      name: 'pokemonsTypes',
      value: '',
      selected: ''
    }
  })

  const searchValue = form.search.value
  const selectedTypeValue = form.pokemonsTypes.value

  const nextOffsetRef = useRef(10)

  const limit = 10

  useEffect(() => {
    void dispatch(loadPokemons({ offset: 0, limit }))
  }, [])

  const refLastBlock = useScrollPagination(
    () => {
      nextOffsetRef.current += limit
      void dispatch(loadMorePokemons({
        offset: nextOffsetRef.current,
        limit
      }))
    },
    pokemonsLoading,
    Boolean(pokemons.next) && selectedTypeValue === '' && searchValue === ''
  )

  useEffect(() => {
    if (selectedTypeValue !== '') {
      void dispatch(loadAllTypesPokemons(
        Number(selectedTypeValue),
        searchValue)
      )
    }

    if (searchValue !== '') {
      dispatch(setDataSearchPokemonsAction(searchValue))
    }
  }, [selectedTypeValue, searchValue])

  return (
    <Section>
      <h1 className={classes.title}>
        Pokemons
      </h1>
      <Form
        name='formFilters'
        className={classes.form}
      >
        <InputSearch
          name={form.search.name}
          value={searchValue}
          onChange={onChange}
        />
        <Select
          placeholder='Selected type'
          name={form.pokemonsTypes.name}
          value={selectedTypeValue}
          selected={form.pokemonsTypes.selected}
          onChange={onSelected}
        />
      </Form>
      <PokemonsList
        pokemons={pokemons.types}
        variant={POKEMONS_STYLES.SECONDARY}
        innerRef={refLastBlock}
      />
    </Section>
  )
}

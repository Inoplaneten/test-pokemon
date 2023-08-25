import { type Dispatch, type AnyAction } from 'redux'

import { getErrorMessage } from 'utils/getErrorMessage'

import { PokemonAPI, type IPokemonAPIGetAll } from 'api/PokemonAPI'

import { POKEMONS } from './consts'

import { type IPokemonsStore } from './types'
import { type IAPIPokemonResult } from 'types/IAPIPokemonResponse'

export const setLoadingPokemonsAction = (): AnyAction => {
  return {
    type: POKEMONS.SET_LOADING
  }
}

export const setDataPokemonsAction = (
  data: IPokemonsStore['pokemons']
): AnyAction => {
  return {
    type: POKEMONS.SET_DATA,
    payload: data
  }
}

export const setLoadMorePokemonsAction = (
  data: IPokemonsStore['pokemons']
): AnyAction => {
  return {
    type: POKEMONS.SET_LOAD_MORE,
    payload: data
  }
}

export const setDataTypesPokemonsAction = (
  data: IPokemonsStore['pokemons']['types']
): AnyAction => {
  return {
    type: POKEMONS.SET_FILTER,
    payload: data
  }
}

export const setDataSearchPokemonsAction = (
  query: string
): AnyAction => {
  return {
    type: POKEMONS.SET_SEARCH,
    payload: query.toLocaleLowerCase()
  }
}

export const setErrorPokemonsAction = (
  error: IPokemonsStore['error']
): AnyAction => {
  return {
    type: POKEMONS.SET_ERROR,
    payload: error
  }
}

export const loadPokemons = (
  {
    offset,
    limit
  }: IPokemonAPIGetAll
) => async (dispatch: Dispatch) => {
  dispatch(setLoadingPokemonsAction())

  try {
    const { data } = await PokemonAPI.getAll({
      offset,
      limit
    })

    dispatch(setDataPokemonsAction({
      results: data.results,
      count: data.count,
      next: data.next,
      previous: data.previous,
      types: data.results
    }))
  } catch (error) {
    dispatch(setErrorPokemonsAction(getErrorMessage(error)))
  }
}

export const loadMorePokemons = (
  {
    offset,
    limit
  }: IPokemonAPIGetAll
) => async (dispatch: Dispatch) => {
  dispatch(setLoadingPokemonsAction())

  try {
    const { data } = await PokemonAPI.getAll({
      offset,
      limit
    })

    dispatch(setLoadMorePokemonsAction({
      results: data.results,
      count: data.count,
      next: data.next,
      previous: data.previous,
      types: data.results
    }))
  } catch (error) {
    dispatch(setErrorPokemonsAction(getErrorMessage(error)))
  }
}

export const loadAllTypesPokemons = (
  type: number,
  query: string
) => async (dispatch: Dispatch) => {
  dispatch(setLoadingPokemonsAction())

  try {
    const { data } = await PokemonAPI.getType(type)

    const types = data.pokemon.map(({
      pokemon
    }: { pokemon: IAPIPokemonResult }) => ({
      ...pokemon
    }))

    dispatch(setDataTypesPokemonsAction(types))

    if (query !== '') {
      dispatch(setDataSearchPokemonsAction(query))
    }
  } catch (error) {
    dispatch(setErrorPokemonsAction(getErrorMessage(error)))
  }
}

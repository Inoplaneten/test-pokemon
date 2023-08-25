import { type Dispatch, type AnyAction } from 'redux'

import { getErrorMessage } from 'utils/getErrorMessage'

import { PokemonAPI } from 'api/PokemonAPI'

import { type IPokemonsAllTypesStore } from './types'

import { POKEMONS_ALL_TYPES } from './consts'

export const setLoadingPokemonsAllTypesAction = (): AnyAction => {
  return {
    type: POKEMONS_ALL_TYPES.SET_LOADING
  }
}

export const setDataPokemonsAllTypesAction = (
  data: IPokemonsAllTypesStore['pokemonsAllTypes']
): AnyAction => {
  return {
    type: POKEMONS_ALL_TYPES.SET_DATA,
    payload: data
  }
}

export const setErrorPokemonsAllTypesAction = (
  error: IPokemonsAllTypesStore['error']
): AnyAction => {
  return {
    type: POKEMONS_ALL_TYPES.SET_ERROR,
    payload: error
  }
}

export const loadPokemonsAllTypes = () =>
  async (dispatch: Dispatch) => {
    setLoadingPokemonsAllTypesAction()

    try {
      const { data } = await PokemonAPI.getTypes()

      dispatch(setDataPokemonsAllTypesAction({
        results: data.results,
        count: data.count,
        next: data.next,
        previous: data.previous
      }))
    } catch (error) {
      dispatch(setErrorPokemonsAllTypesAction(getErrorMessage(error)))
    }
  }

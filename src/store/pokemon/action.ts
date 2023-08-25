import { type Dispatch, type AnyAction } from 'redux'

import { getErrorMessage } from 'utils/getErrorMessage'

import { PokemonAPI } from 'api/PokemonAPI'

import { POKEMON } from './consts'

import { type IPokemonStore } from './types'

export const setLoadingPokemonAction = (): AnyAction => {
  return {
    type: POKEMON.SET_LOADING
  }
}

export const setDataPokemonAction = (
  data: IPokemonStore['pokemon']
): AnyAction => {
  return {
    type: POKEMON.SET_DATA,
    payload: data
  }
}

export const setErrorPokemonAction = (
  error: IPokemonStore['error']
): AnyAction => {
  return {
    type: POKEMON.SET_ERROR,
    payload: error
  }
}

export const loadPokemon = (name: string) => async (dispatch: Dispatch) => {
  setLoadingPokemonAction()

  try {
    const { data } = await PokemonAPI.getSingle(name)

    dispatch(setDataPokemonAction({
      name: data.name,
      image: data?.sprites.other?.['official-artwork']?.front_default,
      moves: data.moves,
      stats: data.stats,
      types: data.types
    }))
  } catch (error) {
    dispatch(setErrorPokemonAction(getErrorMessage(error)))
  }
}

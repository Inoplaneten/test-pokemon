import { type AnyAction } from 'redux'

import { POKEMONS_ALL_TYPES } from './consts'
import { type IPokemonsAllTypesStore } from './types'

const initialState = {
  pokemonsAllTypes: {
    count: null,
    next: null,
    previous: null,
    results: [],
    types: []
  },
  error: null,
  loading: false
}

export const pokemonsAllTypesReducer = (
  state: IPokemonsAllTypesStore = initialState,
  action: AnyAction
): IPokemonsAllTypesStore => {
  switch (action.type) {
    case POKEMONS_ALL_TYPES.SET_LOADING:
      return {
        ...state,
        loading: true,
        error: null
      }
    case POKEMONS_ALL_TYPES.SET_DATA:
      return {
        ...state,
        loading: false,
        error: null,
        pokemonsAllTypes: action.payload
      }
    case POKEMONS_ALL_TYPES.SET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

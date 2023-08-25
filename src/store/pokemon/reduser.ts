import { type AnyAction } from 'redux'

import { POKEMON } from './consts'
import { type IPokemonStore } from './types'

const initialState = {
  pokemon: {
    name: null,
    url: null,
    image: null,
    moves: [],
    stats: [],
    types: []
  },
  error: null,
  loading: false
}

const pokemonReducer = (
  state: IPokemonStore = initialState,
  action: AnyAction
): IPokemonStore => {
  switch (action.type) {
    case POKEMON.SET_LOADING:
      return {
        ...state,
        loading: true,
        error: null
      }
    case POKEMON.SET_DATA:
      return {
        ...state,
        loading: false,
        error: null,
        pokemon: action.payload
      }
    case POKEMON.SET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export { pokemonReducer }

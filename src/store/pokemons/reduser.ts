/* eslint-disable @typescript-eslint/indent */
import { type AnyAction } from 'redux'

import { POKEMONS } from './consts'
import { type IPokemonsStore } from './types'
import { type IAPIPokemonResult } from 'types/IAPIPokemonResponse'

const initialState = {
  pokemons: {
    count: null,
    next: null,
    previous: null,
    results: [],
    types: []
  },
  error: null,
  loading: false
}

const pokemonsReducer = (
  state: IPokemonsStore = initialState,
  action: AnyAction
): IPokemonsStore => {
  switch (action.type) {
    case POKEMONS.SET_LOADING:
      return {
        ...state,
        loading: true,
        error: null
      }
    case POKEMONS.SET_DATA:
      return {
        ...state,
        loading: false,
        error: null,
        pokemons: action.payload
      }
    case POKEMONS.SET_LOAD_MORE:
      return {
        ...state,
        loading: false,
        pokemons: {
          ...state.pokemons,
          results: [
            ...state.pokemons.results,
            ...action.payload.results
          ],
          types: [
            ...state.pokemons.types,
            ...action.payload.types
          ]
        }
      }
    case POKEMONS.SET_FILTER:
      return {
        ...state,
        loading: false,
        error: null,
        pokemons: {
          ...state.pokemons,
          types: state.pokemons.results
            .filter(({ name }) => (
              action.payload.find((item: IAPIPokemonResult) => (
                item.name === name
              )))
            )
        }
      }
    case POKEMONS.SET_SEARCH:
      // eslint-disable-next-line no-case-declarations
      const searhTypes = state.pokemons.types
        .filter(({ name }) => (
          name?.toLowerCase().includes(action.payload))
        )
      // eslint-disable-next-line no-case-declarations
      const searhResults = state.pokemons.results
        .filter(({ name }) => (
          name?.toLowerCase().includes(action.payload))
        )

      return {
        ...state,
        loading: false,
        error: null,
        pokemons: {
          ...state.pokemons,
          types: searhTypes ?? searhResults
        }
      }
    case POKEMONS.SET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export { pokemonsReducer }

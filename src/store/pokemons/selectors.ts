import { type IPokemonsStore } from './types'

export const selectLoadingPokemons = (
  state: {
    pokemonsReducer: IPokemonsStore
  }
): IPokemonsStore['loading'] => state.pokemonsReducer.loading

export const selectDataPokemons = (
  state: {
    pokemonsReducer: IPokemonsStore
  }
): IPokemonsStore['pokemons'] => state.pokemonsReducer.pokemons

export const selectErrorPokemons = (
  state: {
    pokemonsReducer: IPokemonsStore
  }
): IPokemonsStore['error'] => state.pokemonsReducer.error

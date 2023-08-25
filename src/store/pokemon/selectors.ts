import { type IPokemonStore } from './types'

export const selectLoadingPokemon = (
  state: {
    pokemonReducer: IPokemonStore
  }
): IPokemonStore['loading'] => state.pokemonReducer.loading

export const selectDataPokemon = (
  state: {
    pokemonReducer: IPokemonStore
  }
): IPokemonStore['pokemon'] => state.pokemonReducer.pokemon

export const selectErrorPokemon = (
  state: {
    pokemonReducer: IPokemonStore
  }
): IPokemonStore['error'] => state.pokemonReducer.error

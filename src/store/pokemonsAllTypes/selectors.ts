import { type IPokemonsAllTypesStore } from './types'

export const selectLoadingPokemonsAllTypes = (
  state: {
    pokemonsAllTypesReducer: IPokemonsAllTypesStore
  }
): IPokemonsAllTypesStore['loading'] => state.pokemonsAllTypesReducer.loading

export const selectDataPokemonsAllTypes = (
  state: {
    pokemonsAllTypesReducer: IPokemonsAllTypesStore
  }
): IPokemonsAllTypesStore['pokemonsAllTypes'] => (
  state.pokemonsAllTypesReducer.pokemonsAllTypes
)

export const selectErrorPokemonsAllTypes = (
  state: {
    pokemonsAllTypesReducer: IPokemonsAllTypesStore
  }
): IPokemonsAllTypesStore['error'] => state.pokemonsAllTypesReducer.error

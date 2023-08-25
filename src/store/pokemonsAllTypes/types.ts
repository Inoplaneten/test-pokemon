import {
  type IAPIPokemonResponse
} from 'types/IAPIPokemonResponse'

export interface IPokemonsAllTypesStore {
  pokemonsAllTypes: Omit<IAPIPokemonResponse, 'types'>
  error: string | null
  loading: boolean
}

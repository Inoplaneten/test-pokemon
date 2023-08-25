import {
  type IAPIPokemonResponse
} from 'types/IAPIPokemonResponse'

export interface IPokemonsStore {
  pokemons: IAPIPokemonResponse
  error: string | null
  loading: boolean
}

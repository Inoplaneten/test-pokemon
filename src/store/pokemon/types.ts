import {
  type IAPIDetailsPokemon
} from 'types/IAPIPokemonResponse'

export interface IPokemonStore {
  pokemon: {
    image: string | null
  } & Omit<IAPIDetailsPokemon, 'sprites'>
  error: string | null
  loading: boolean
}

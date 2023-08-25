export interface IAPIPokemonResult {
  name: string | null
  url: string | null
}

export interface IAPIPokemonType {
  type: {
    name: string
  }
}

export interface IAPIPokemonMove {
  move: IAPIPokemonResult
}

export interface IAPIPokemonStat {
  base_stat: number | null
  effort: number | null
  stat: IAPIPokemonResult
}

export interface IAPIDetailsPokemon extends Omit<IAPIPokemonResult, 'url'> {
  sprites: {
    other: {
      ['official-artwork']: {
        front_default: string | null
      }
    }
  }
  moves: IAPIPokemonMove[] | []
  stats: IAPIPokemonStat[] | []
  types: IAPIPokemonType[] | []
}

export interface IAPIPokemonResponse {
  count?: number | null
  next?: string | null
  previous?: string | null
  results: IAPIPokemonResult[]
  types: IAPIPokemonResult[]
}

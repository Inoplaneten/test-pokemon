import { lazy } from 'react'

export const PokemonsPage = lazy(async () => await import('scenes/Pokemons'))

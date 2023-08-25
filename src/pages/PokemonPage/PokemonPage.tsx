import { lazy } from 'react'

export const PokemonPage = lazy(async () => await import('scenes/Pokemon'))

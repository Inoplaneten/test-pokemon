import { type RouteProps } from 'react-router-dom'

import { HomePage } from 'pages/HomePage'
import { PokemonsPage } from 'pages/PokemonsPage'
import { PokemonPage } from 'pages/PokemonPage'
import { NotFoundPage } from 'pages/NotFound'

export enum AppRoutes {
  HOME = 'home',
  POKEMONS = 'pokemons',
  POKEMON = 'pokemon',
  NOT_FOUND = 'not_found'
};

export const routePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.POKEMONS]: '/pokemons',
  [AppRoutes.POKEMON]: '/pokemons/:name',
  [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    path: routePath.home,
    element: <HomePage />
  },
  [AppRoutes.POKEMONS]: {
    path: routePath.pokemons,
    element: <PokemonsPage />
  },
  [AppRoutes.POKEMON]: {
    path: routePath.pokemon,
    element: <PokemonPage />
  },
  [AppRoutes.NOT_FOUND]: {
    path: routePath.not_found,
    element: <NotFoundPage />
  }
}

import { routePath } from 'app/config/routeConfig'

export interface IMenu {
  path: string
  label: string
}

export const menu: IMenu[] = [
  {
    path: routePath.home,
    label: 'Home'
  },
  {
    path: routePath.pokemons,
    label: 'Pokemons'
  }
]

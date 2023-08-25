import axios, { type AxiosResponse } from 'axios'

const instance = axios.create({
  withCredentials: false,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET'
  },
  baseURL: 'https://pokeapi.co/api/v2/'
})

export interface IPokemonAPIGetAll {
  offset: number
  limit: number
}

export const PokemonAPI = {
  async getAll ({
    offset = 0,
    limit = 10
  }: IPokemonAPIGetAll): Promise<AxiosResponse> {
    return await instance.get(`pokemon?limit=${limit}&offset=${offset}`)
  },
  async getSingle (name: string): Promise<AxiosResponse> {
    return await instance.get(`pokemon/${name}`)
  },
  async getType (type: number): Promise<AxiosResponse> {
    return await instance.get(`/type/${type}`)
  },
  async getTypes (): Promise<AxiosResponse> {
    return await instance.get('/type')
  }
}

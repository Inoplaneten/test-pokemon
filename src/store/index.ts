import thunk from 'redux-thunk'
import { type AnyAction, applyMiddleware, combineReducers } from 'redux'
import { configureStore, type ThunkDispatch } from '@reduxjs/toolkit'
import { composeWithDevTools } from '@redux-devtools/extension'

import { pokemonsReducer } from './pokemons/reduser'
import { pokemonReducer } from './pokemon/reduser'
import { pokemonsAllTypesReducer } from './pokemonsAllTypes/reduser'

const rootReducer = combineReducers({
  pokemonsReducer,
  pokemonReducer,
  pokemonsAllTypesReducer
})

const store = configureStore({
  reducer: rootReducer,
  enhancers: [composeWithDevTools(applyMiddleware(thunk))]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>

export default store

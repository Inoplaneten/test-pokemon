import { lazy } from 'react'

export const HomePage = lazy(async () => await import('scenes/Home'))

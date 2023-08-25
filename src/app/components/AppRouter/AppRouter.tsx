import { type FC, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import { MainLayout } from 'components/layouts/MainLayout'

import { routeConfig } from 'app/config/routeConfig'

export const AppRouter: FC = () => (
  <MainLayout>
    <Routes>
      {Object.values(routeConfig).map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback='Loading...'>
              {element}
            </Suspense>
          }
        />
      ))}
    </Routes>
  </MainLayout>
)

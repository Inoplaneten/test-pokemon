import { type ReactNode, type FC } from 'react'

import { Header } from './components/Header'
import { Footer } from './components/Footer'

import classes from './MainLayot.module.scss'

interface MainLayoutProps {
  children: ReactNode
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => (
  <>
    <Header />
    <main className={classes.mainLayout}>
      {children}
    </main>
    <Footer />
  </>
)

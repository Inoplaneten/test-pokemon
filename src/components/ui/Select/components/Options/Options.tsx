import { type MouseEvent, forwardRef, useEffect } from 'react'

import { useAppDispatch } from 'hooks/useAppDispatch'

import { useAppSelector } from 'hooks/useAppSelector'

import { selectDataPokemonsAllTypes } from 'store/pokemonsAllTypes/selectors'

import { loadPokemonsAllTypes } from 'store/pokemonsAllTypes/action'

import { classNames } from 'utils/classNames'

import classes from './Options.module.scss'

interface IOptionsProps {
  name: string
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
  selected: string | undefined
  open: boolean
  onToggleShown: () => void
};

type TOptionsRef = HTMLUListElement | null

export const Options = forwardRef<TOptionsRef, IOptionsProps>(({
  onClick,
  name,
  selected,
  open,
  onToggleShown
}, ref) => {
  const dispatch = useAppDispatch()
  const options = useAppSelector(selectDataPokemonsAllTypes)

  useEffect(() => {
    void dispatch(loadPokemonsAllTypes())
  }, [dispatch])

  return (
    <ul
      ref={ref}
      className={classNames(classes.options, {
        [classes.open]: open
      })}
    >
      {options.results.map((option) => {
        const value = option?.url?.split('/').reverse()[1]

        return (
          <li key={option?.name}>
            <button
              className={classNames(classes.options__btn, {
                [classes.selected]: selected === option?.name
              })}
              type='button'
              aria-label={`Select ${option?.name}`}
              data-name={option?.name}
              value={value}
              name={name}
              onClick={(event) => {
                onClick(event)
                onToggleShown()
              }}
            >
              {option?.name}
            </button>
          </li>
        )
      })}
    </ul>
  )
})

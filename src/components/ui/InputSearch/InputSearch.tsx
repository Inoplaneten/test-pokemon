import {
  type ChangeEvent,
  type FC
} from 'react'

import { classNames } from 'utils/classNames'

import { IconSearch } from 'components/icons/IconSearch'

import classes from './InputSearch.module.scss'

// type HTMLInputProps = Omit<
// InputHTMLAttributes<HTMLInputElement>,
// 'value' | 'onChange'
// >

interface InputSearchProps {
  className?: string
  name?: string | undefined
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const InputSearch: FC<InputSearchProps> = ({
  className,
  name,
  onChange,
  value,
  ...props
}) => {
  return (
    <div className={classNames(classes.inputSearchBox, {}, [className])}>
      <input
        type='search'
        name={name}
        value={value}
        placeholder='Search pokemons'
        className={classes.inputSearch}
        onChange={onChange}
        {...props}
      />
      <span className={classes.inputSearch__icon}>
        <IconSearch />
      </span>
    </div>
  )
}

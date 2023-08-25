import {
  type FC,
  useEffect,
  useState,
  useRef,
  useCallback,
  type MouseEvent
} from 'react'

import { IconArrowDown } from 'components/icons/IconArrowDown'

import { classNames } from 'utils/classNames'

import { Options } from './components/Options'

import classes from './Select.module.scss'

interface ISelectProps {
  selected: string | undefined
  name: string
  placeholder?: string
  value: string
  onChange: (event: MouseEvent<HTMLButtonElement>) => void
};

export const Select: FC<ISelectProps> = ({
  name,
  placeholder,
  selected,
  value,
  onChange
}) => {
  const rootRef = useRef<HTMLDivElement>(null)
  const [hidden, setHidden] = useState<boolean>(false)

  const onToggleHidden = useCallback(() => {
    setHidden(!hidden)
  }, [hidden])

  useEffect(() => {
    const handleClick = (event: any): void => {
      const { target } = event
      if (target instanceof Node &&
        !((rootRef.current?.contains(target)) ??
        false)) {
        hidden && onToggleHidden()
      }
    }

    window.addEventListener('click', handleClick)

    return () => { window.removeEventListener('click', handleClick) }
  }, [hidden])

  return (
    <div
      className={classes.select}
      ref={rootRef}
    >
      <button
        type='button'
        className={classNames(classes.select__btn,
          {
            [classes.selected]: Boolean(selected)
          }
        )}
        onClick={() => { setHidden(!hidden) }}
        name={name}
        value={value ?? undefined}
      >
        <span>{selected === '' ? placeholder : selected}</span>
        <IconArrowDown active={hidden} />
      </button>
      <Options
        name={name}
        onClick={onChange}
        selected={selected}
        open={hidden}
        onToggleShown={onToggleHidden}
      />
    </div>
  )
}

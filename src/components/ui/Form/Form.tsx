import { type FC, type FormEvent, type ReactNode } from 'react'

interface Props {
  children: ReactNode
  name?: string
  className?: string
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void
};

export const Form: FC<Props> = ({ children, name, className, onSubmit }) => (
  <form
    name={name}
    className={className}
    onSubmit={event => {
      event.preventDefault()
      onSubmit?.(event)
    }}
  >
    {children}
  </form>
)

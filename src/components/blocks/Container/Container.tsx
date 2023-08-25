import { type ReactNode, type FC } from 'react'

import { classNames } from 'utils/classNames'

interface ContainerProps {
  children: ReactNode
  className?: string
};

export const Container: FC<ContainerProps> = ({ className, children }) => (
  <div className={classNames('container', {}, [className])}>
    {children}
  </div>
)

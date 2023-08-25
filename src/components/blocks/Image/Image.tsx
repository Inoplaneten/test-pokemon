import { type FC } from 'react'

import { classNames } from 'utils/classNames'

interface ImageProps {
  src: string | undefined
  alt: string | undefined
  className?: string
};

export const Image: FC<ImageProps> = ({ className, src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={classNames('', {}, [className])}
    />
  )
}

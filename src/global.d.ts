declare module '*.scss' {
  type IClassNames = Record<string, string>
  const classNames: IClassNames
  export = classNames
}

declare module '*.svg' {
  import { type FC, type SVGProps } from 'react'
  const SVG: FC<SVGProps<SVGSVGElement>>
  export default SVG
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';

import type { FC } from 'react'
import React from 'react'

export type TIconBaseProps = React.SVGAttributes<SVGElement>

export const IconBase: FC<TIconBaseProps> = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    />
  )
}

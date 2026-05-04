import clsx from 'clsx'
import type { HTMLAttributes, ReactNode } from 'react'

export function Container({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement> & { children: ReactNode }) {
  return (
    <div
      {...rest}
      className={clsx('mx-auto w-full max-w-[1400px] px-6 md:px-10 lg:px-14', className)}
    >
      {children}
    </div>
  )
}

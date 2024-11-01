import type { ClassNameValue } from 'tailwind-merge'
import { type ButtonHTMLAttributes, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export type TFormSubmitButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: ClassNameValue
}

export const FormButtonSubmit = forwardRef<HTMLButtonElement, TFormSubmitButtonProps>((
  { className, ...props },
  ref,
) => {
  return (
    <button
      ref={ref}

      className={twMerge(
        'p-2 w-full max-w-[240px] transition-transform rounded-full px-[32px] py-[15px] text-white font-bold',
        'active:scale-95',
        className,
      )}

      style={{
        background: 'linear-gradient(110.46deg, #70C3FF 12.27%, #4B65FF 93.92%)',
      }}

      {...props}
    />
  )
})

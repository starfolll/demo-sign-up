import type { InputHTMLAttributes } from 'react'
import type { ClassNameValue } from 'tailwind-merge'
import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export type TFormInputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: ClassNameValue
}

export const FormInput = forwardRef<HTMLInputElement, TFormInputProps>((
  { className, ...props },
  ref,
) => {
  return (
    <input
      ref={ref}

      className={twMerge(
        'p-[10px] pl-[20px] text-[#4A4E71] placeholder-[#6F91BC] outline-none border rounded-[10px] h-12 border-white bg-white text-base',
        'focus:border-[#6F91BC]',
        className,
      )}

      {...props}
    />
  )
})

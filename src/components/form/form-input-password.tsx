import { forwardRef, type InputHTMLAttributes, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { IconPasswordHide } from '../icons/icon-password-hide'
import { IconPasswordShow } from '../icons/icon-password-show'
import { FormInput } from './form-input'

export type TFormInputPasswordProps = InputHTMLAttributes<HTMLInputElement> & {
  buttonClassName?: string
}

export const FormInputPassword = forwardRef<HTMLInputElement, TFormInputPasswordProps>((
  { buttonClassName, ...props },
  ref,
) => {
  const [showPassword, setShowPassword] = useState(false)

  const toggleShowPassword = () => {
    setShowPassword(showPassword => !showPassword)
  }

  return (
    <div
      className="flex group/form-input-password"
    >
      <FormInput
        ref={ref}
        type={showPassword ? 'text' : 'password'}

        {...props}

        className={twMerge('grow border-r-0 rounded-r-none', props.className)}
      />

      <button
        className={twMerge(
          'bg-white border border-l-0 outline-none text-[#6F91BC] border-white rounded-r-[10px] p-[10px] pr-[20px]',
          'focus-visible:border-[#6F91BC] focus-visible:border-l',
          'group-focus-within/form-input-password:border-[#6F91BC]',
          buttonClassName,
        )}

        type="button"
        onClick={toggleShowPassword}
      >
        {showPassword
          ? <IconPasswordShow />
          : <IconPasswordHide />}
      </button>
    </div>
  )
})

import type { FC, FormEvent } from 'react'
import { useEffect, useState } from 'react'
import { type ClassNameValue, twMerge } from 'tailwind-merge'
import { FormButtonSubmit } from './form/form-button-submit'
import { FormInput } from './form/form-input'
import { FormInputPassword } from './form/form-input-password'
import { getClassNameForErrorDescription } from './utils/getClassNames/get-class-name-for-error-description'
import { getClassNameForInvalidInput } from './utils/getClassNames/get-class-name-for-invalid-input'
import { getJoiErrorsDetails } from './utils/joi/get-joi-errors-details'
import { schemaEmail } from './utils/schemas/schema-email'
import { schemaPassword } from './utils/schemas/schema-password'

export type TSignUpFormProps = {
  className?: ClassNameValue
}

export const SignUpForm: FC<TSignUpFormProps> = ({ className }) => {
  const [isSignIpCompleted, setIsSignUpCompleted] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [showEmailStatus, setShowEmailStatus] = useState(false)
  const [showPasswordStatus, setShowPasswordStatus] = useState(false)

  const [emailErrors, setEmailErrors] = useState<Set<string>>(new Set())
  const [passwordErrors, setPasswordErrors] = useState<Set<string>>(new Set())

  const isShowingEmailError = showEmailStatus && emailErrors.size > 0
  const isPasswordEmpty = passwordErrors.has('string.empty')
  const isShowingPasswordLine1Error = showPasswordStatus && (isPasswordEmpty || passwordErrors.has('string.min') || passwordErrors.has('noSpaces'))
  const isShowingPasswordLine2Error = showPasswordStatus && (isPasswordEmpty || passwordErrors.has('missingLowerCase') || passwordErrors.has('missingUpperCase'))
  const isShowingPasswordLine3Error = showPasswordStatus && (isPasswordEmpty || passwordErrors.has('missingNumber'))
  const isShowingPasswordError = isShowingPasswordLine1Error || isShowingPasswordLine2Error || isShowingPasswordLine3Error

  const isFormValid = emailErrors.size === 0 && passwordErrors.size === 0

  useEffect(() => {
    const { error } = schemaEmail.validate(email)

    const errorsDetails = getJoiErrorsDetails(error)
    setEmailErrors(new Set(errorsDetails))

    if (errorsDetails.length === 0)
      setShowEmailStatus(true)
  }, [email])

  useEffect(() => {
    const { error } = schemaPassword.validate(password, { abortEarly: false })

    const errorsDetails = getJoiErrorsDetails(error)
    setPasswordErrors(new Set(errorsDetails))

    if (errorsDetails.length === 0)
      setShowPasswordStatus(true)
  }, [password])

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()

    setShowEmailStatus(true)
    setShowPasswordStatus(true)

    if (isFormValid)
      setIsSignUpCompleted(true)
  }

  return (
    <form
      onSubmit={onSubmit}
      className={twMerge('flex flex-col items-center gap-10 max-w-80', className)}
    >
      <p className="text-center text-[#4A4E71] font-bold text-[28px] leading-[28px]">
        Sign up
      </p>

      <div className="grid w-full gap-5">
        <FormInput
          placeholder="Email"
          type="email"
          autoComplete="email"
          className={getClassNameForInvalidInput(showEmailStatus, isShowingEmailError)}

          value={email}
          onChange={e => setEmail(e.target.value)}

          onBlur={() => setShowEmailStatus(true)}
        />

        <FormInputPassword
          placeholder="Create your password"
          autoComplete="new-password"
          className={getClassNameForInvalidInput(showPasswordStatus, isShowingPasswordError)}
          buttonClassName={getClassNameForInvalidInput(showPasswordStatus, isShowingPasswordError)}

          value={password}
          onChange={e => setPassword(e.target.value)}

          onBlur={() => setShowPasswordStatus(true)}
        />

        <div className="grid gap-1 px-[20px] text-[#4A4E71] text-[13px] leading-[18px]">
          <p className={getClassNameForErrorDescription(showPasswordStatus, isShowingPasswordLine1Error)}>
            8 characters or more (no spaces)
          </p>

          <p className={getClassNameForErrorDescription(showPasswordStatus, isShowingPasswordLine2Error)}>
            Uppercase and lowercase letters
          </p>

          <p className={getClassNameForErrorDescription(showPasswordStatus, isShowingPasswordLine3Error)}>
            At least one digit
          </p>
        </div>
      </div>

      <FormButtonSubmit
        type="submit"
      >
        {isSignIpCompleted ? 'Sign up completed!' : 'Sign up'}
      </FormButtonSubmit>
    </form>
  )
}

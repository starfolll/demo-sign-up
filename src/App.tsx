import type { FC } from 'react'
import { IconStarGroup } from './components/icons/icon-star-group'
import { SignUpForm } from './components/sign-up-form'

export const App: FC = () => {
  return (
    <main className="h-full overflow-hidden flex flex-col justify-center items-center relative">
      <IconStarGroup className="-z-10 text-[#CFE1F4] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <SignUpForm className="w-full" />
    </main>
  )
}

export default App

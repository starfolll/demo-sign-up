export function getClassNameForInvalidInput(showStatus: boolean, hasErrors: boolean): string {
  if (!showStatus)
    return ''

  if (hasErrors)
    return 'border-[#FF8080] bg-[#FDEFEE]'

  return 'border-[#27B274] text-[#27B274]'
}

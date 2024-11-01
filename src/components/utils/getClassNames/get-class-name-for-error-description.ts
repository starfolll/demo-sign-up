export function getClassNameForErrorDescription(showStatus: boolean, hasErrors: boolean): string {
  if (!showStatus)
    return ''

  if (hasErrors)
    return 'text-[#FF8080]'

  return 'text-[#27B274]'
}

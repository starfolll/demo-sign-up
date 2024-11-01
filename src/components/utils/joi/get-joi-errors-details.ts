import type { ValidationError } from 'joi'

export function getJoiErrorsDetails(error: ValidationError | undefined): string[] {
  return error?.details.map(d => d.context?.name ?? d.type) ?? []
}


export const canReconfigure = (from?: number | string, to?: number | string): boolean => {
  if (typeof from !== 'string') throw new Error('from must be a string')
  if (typeof to !== 'string') throw new Error('to must be a string')

  const isSameLength = from.length === to.length
  if (!isSameLength) return false

  const hasSameUniqueLetters = new Set(from).size === new Set(to).size
  if (!hasSameUniqueLetters) return false

  const transformations: Record<string, string> = {}

  // este for evalua la transformacion sobre la misma posicion de las letras
  for (let i = 0; i < from.length; i++) {
    const fromLetter = from[i]
    const toLetter = to[i]

    const storedLetter = transformations[fromLetter as string]

    if (storedLetter && storedLetter !== toLetter) return false

    transformations[fromLetter as string] = toLetter as string
  }

  return true
}

export default canReconfigure

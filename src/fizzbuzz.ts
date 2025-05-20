interface multiple {
  [key: number]: string

}

export const fizzbuzz = (value: any = undefined): number | string => {
  if (typeof value !== 'number') throw new Error('value provided must be a number')
  if (Number.isNaN(value)) throw new Error('parameter provided must be a number')

  const multiple: multiple = { 3: 'fizz', 5: 'buzz', 7: 'miau' }

  let output: string | number = ''

  Object
    .entries(multiple)
    .forEach(([multiplier, word]) => {
      if (value % Number(multiplier) === 0) output += word
    })

  return output === '' ? value : output
}

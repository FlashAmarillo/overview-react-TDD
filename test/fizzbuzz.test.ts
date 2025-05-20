import { fizzbuzz } from '../src/fizzbuzz'

/*
Escribir una función que al pasarle un número:
	-muestra fizz si es multiplo de 3
	-muestra buzz si es multiplo de 5
	-muestra FizzBuzz si es multiplo de 3 y 5
	-muestra el número si no es múltiplo de ninguno de los anteriores
*/

describe('fizzbuzz', (): void => {
  // este test ya esta cubierto en el algoritmo y es redundante
  // it('should be a function', (): void => {
  // 	expect(typeof fizzbuzz).toBe('function')
  // })

  it('should throw an error if not a number is provided as parameter', (): void => {
    // en este caso envolvemos la funcion en un callback ya que necesitamos un throw
    expect(() => fizzbuzz()).toThrow()
  })

  it('should throw an specific error message if not number is provided as parameter', (): void => {
    expect(() => fizzbuzz()).toThrow('value provided must be a number')
  })

  it('should throw an specific error message not a number provided', (): void => {
    expect(() => fizzbuzz(NaN)).toThrow('parameter provided must be a number')
  })

  it('should return 1 if number provided is 1', (): void => {
    expect(fizzbuzz(1)).toBe(1)
  })

  it('should return 2 if number provided is 2', (): void => {
    expect(fizzbuzz(2)).toBe(2)
  })

  it('should return fizz if number provided is 3', (): void => {
    expect(fizzbuzz(3)).toBe('fizz')
  })

  it('should return "fizz" if number provided is multiple of 3', (): void => {
    expect(fizzbuzz(6)).toBe('fizz')
    expect(fizzbuzz(9)).toBe('fizz')
    expect(fizzbuzz(12)).toBe('fizz')
  })

  it('should return "buzz" if number provided is 5', (): void => {
    expect(fizzbuzz(5)).toBe('buzz')
  })

  it('should return "buzz" if number provided is multiple of 5', (): void => {
    expect(fizzbuzz(10)).toBe('buzz')
    expect(fizzbuzz(20)).toBe('buzz')
  })

  it('should return "fizzbuzz" if number provided is multiple of 15, like 3 and 5', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz')
  })

  it('should return "miau" if number provided is multiple of 7', () => {
    expect(fizzbuzz(7)).toBe('miau')
  })

  it('should return "miau" if number provided is multiple of 7, esto demuestra que los if statements no escalan', () => {
    expect(fizzbuzz(21)).toBe('fizzmiau') // este resultado rompe el proposito edl fizzbuzz
  })
})

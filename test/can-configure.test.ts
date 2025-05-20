import { canReconfigure } from '../src/can-reConfigure'

describe('canreconfigure', () => {
  // it('should be a function', () => {
  //   expect(canReconfigure).toBeTypeOf('function')
  // })

  it('should throw if first parameter is missing', (): void => {
    expect(() => canReconfigure()).toThrow()
  })

  it('should throw if first parameter is not a string', (): void => {
    expect(() => canReconfigure(123)).toThrow()
  })

  it('should throw if second parameter is not a string', (): void => {
    expect(() => canReconfigure('a')).toThrow()
  })

  it('should return a boolean', () => {
    expect(canReconfigure('a', 'b')).toBeTypeOf('boolean')
  })

  it('should return false if lenght of both is different', () => {
    expect(canReconfigure('abc', 'de')).toBeFalsy()
  })

  it('should return false if strings provided have different length even with same unique letters', () => {
    expect(canReconfigure('aab', 'ab')).toBeFalsy()
  })

  it('should return false if strings provided have different number of unique letters', () => {
    expect(canReconfigure('abc', 'ddd')).toBeFalsy()
  })

  it('should return false if strings has different order of transformation', () => {
    expect(canReconfigure('XBOX', 'XXBO')).toBeFalsy()
  })
})

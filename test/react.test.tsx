import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { Calculator, operations, calculatorNumbers } from '../src/Calculator'

describe('Calculator', (): void => {

  // despues de cada render que limpie la pantalla
  afterEach(cleanup)

  it('should render calculator component', () => {
    render(<Calculator />)
  })

  it('should render title correctly', () => {
    render(<Calculator />)

    screen.getByText('Calculator')
    // DATO: en este caso no se necesita de un expect ya que screen ya lanza un throw si no encuentra el texto
  })

  it('should render numbers', (): void => {
    render(<Calculator />)

    calculatorNumbers.forEach(number => {
      screen.getByText(number)
    })

  })

  it('should render 4 rows', () => {
    render(<Calculator />)

    const rows = screen.getAllByRole('row')
    expect(rows.length).toBe(4)
  })

  it('should render operations', () => {
    render(<Calculator />)

    operations.forEach(operation => {

      if(operation === '*') {
        screen.getByText('X')
      } else {
        screen.getByText(operation)
      } 
    })
  })

  it('should render "=" button', () => {
    render(<Calculator />)

    screen.getByText('=')
  })

  it('should render an input', () => {
    render(<Calculator/>)

    screen.getByRole('textbox')
  })

  it('should user input after clicking a number', () => {
    render(<Calculator />)

    const one = screen.getByText('1')
    fireEvent.click(one)

    const input = screen.getByRole('textbox') as HTMLInputElement
    expect(input.value).toBe('1')
  })

  it('should user input after clicking several numbers', () => {
    render(<Calculator />)

    const one = screen.getByText('1')
    fireEvent.click(one)

    const two = screen.getByText('2')
    fireEvent.click(two)

    const three = screen.getByText('3')
    fireEvent.click(three)

    const input = screen.getByRole('textbox') as HTMLInputElement
    expect(input.value).toBe('123')
  })

  it('should show user input after clicking numbers and operations', () => {
    render(<Calculator />)

    const one = screen.getByText('1')
    fireEvent.click(one)
    
    const plus = screen.getByText('+')
    fireEvent.click(plus)
    fireEvent.click(one)

    const input = screen.getByRole('textbox') as HTMLInputElement
    expect(input.value).toBe('1+1')
  })

  it('should calculate based on user input and show the calculation', () => {
    render(<Calculator />)

    const one = screen.getByText('1')
    fireEvent.click(one)
    
    const plus = screen.getByText('+')
    fireEvent.click(plus)
    fireEvent.click(one)

    const equalSign = screen.getByText('=')
    fireEvent.click(equalSign)

    const input = screen.getByRole('textbox') as HTMLInputElement
    expect(input.value).toBe('2')
  })

  it('should reset the calculator after clicking "CE" button', () => {
    render(<Calculator />)

    const one = screen.getByText('1')
    const two = screen.getByText('2')
    fireEvent.click(one)
    fireEvent.click(two)
    
    const plus = screen.getByText('+')
    fireEvent.click(plus)
    fireEvent.click(one)
    fireEvent.click(two)

    const ceButton = screen.getByText('CE')
    fireEvent.click(ceButton)

    const input = screen.getByRole('textbox') as HTMLInputElement
    expect(input.value).toBe('')
    
  })
})
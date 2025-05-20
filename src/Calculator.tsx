import { useState, type FC } from 'react'
import { evaluate } from 'mathjs'

export const calculatorNumbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

export const rows: number[][] = [
  [7, 8, 9],
  [4, 5, 6],
  [1, 2, 3],
  [0]
]

export const operations: string[] = ['+', '-', '*', '/']

export const Calculator: FC = () => {
  const [value, setValue] = useState<string | number>('')

  // op = operation
  const createHandleClick = (op: number | string) => (): void => setValue(value.toString().concat(op.toString()))

  return (
    <section>
      <h1>Calculator</h1>
      <input value={value} readOnly />
      <div role='grid'>
        <div role='numbers'>
          {
          rows.map((row, idx) => (
            <div key={idx} role='row'>
              {
                row.map(number => (
                  <button onClick={createHandleClick(number)} key={number}>{number}</button>
                ))
              }
            </div>
          ))
        }
        </div>

        <div role='operations'>
          {
          operations.map(operation => (
            <button key={operation} onClick={createHandleClick(operation)}>
              {operation === '*' ? 'X' : operation}
            </button>
          ))
        }
        </div>

        <div role='actions'>
          <button onClick={() => setValue(evaluate(value?.toString() ?? ''))}>=</button>
          <button onClick={() => setValue('')}>CE</button>
        </div>
      </div>
    </section>
  )
}

export default Calculator

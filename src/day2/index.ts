import { Day } from '../day'

class Day2 extends Day {
  constructor() {
    super(2)
  }

  solveForPartOne(input: string): string {
    const mappings: { [key: string]: number } = {
      'A X': 1 + 3,
      'A Y': 2 + 6,
      'A Z': 3 + 0,
      'B X': 1 + 0,
      'B Y': 2 + 3,
      'B Z': 3 + 6,
      'C X': 1 + 6,
      'C Y': 2 + 0,
      'C Z': 3 + 3,
    }

    const splitByNewLine = input.split('\n')
    const mappedToValues = splitByNewLine.map((stringValue) => mappings[stringValue])

    return mappedToValues.reduce((runningTotal, currentScore) => runningTotal + currentScore).toString()
  }

  solveForPartTwo(input: string): string {
    const mappings: { [key: string]: number } = {
      'A X': 3 + 0,
      'A Y': 1 + 3,
      'A Z': 2 + 6,
      'B X': 1 + 0,
      'B Y': 2 + 3,
      'B Z': 3 + 6,
      'C X': 2 + 0,
      'C Y': 3 + 3,
      'C Z': 1 + 6,
    }

    const splitByNewLine = input.split('\n')
    const mappedToValues = splitByNewLine.map((stringValue) => mappings[stringValue])

    return mappedToValues.reduce((runningTotal, currentScore) => runningTotal + currentScore).toString()
  }
}

export default new Day2()

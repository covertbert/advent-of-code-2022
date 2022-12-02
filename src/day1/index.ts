import { Day } from '../day'

class Day1 extends Day {
  constructor() {
    super(1)
  }

  solveForPartOne(input: string): string {
    const splitByBlankLine = input.split('\n\n')
    const splitByWhitespaceAsNumbers = splitByBlankLine.map((items) => items.split('\n').map(Number))
    const caloriesPerElf = [...splitByWhitespaceAsNumbers].map((calories) =>
      calories.reduce((totalCalories, currentCalories) => totalCalories + currentCalories, 0),
    )

    return Math.max(...caloriesPerElf).toString()
  }

  solveForPartTwo(input: string): string {
    const splitByBlankLine = input.split('\n\n')
    const splitByWhitespaceAsNumbers = splitByBlankLine.map((items) => items.split('\n').map(Number))
    const caloriesPerElf = [...splitByWhitespaceAsNumbers].map((calories) =>
      calories.reduce((totalCalories, currentCalories) => totalCalories + currentCalories, 0),
    )
    const floatArrayCaloriesPerElf = new Float64Array(caloriesPerElf)
    const sortedCaloriesPerEl = floatArrayCaloriesPerElf.sort().reverse()

    return (sortedCaloriesPerEl[0] + sortedCaloriesPerEl[1] + sortedCaloriesPerEl[2]).toString()
  }
}

export default new Day1()

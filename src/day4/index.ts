import { Day } from '../day'

class Day4 extends Day {
  constructor() {
    super(4)
  }

  rangeToList = (range: string) => {
    const extremities = range.split('-')
    const [start, end] = extremities.map((number) => Number.parseInt(number))
    const length = end + 1 - start

    return Array.from({ length }, (_, i) => start + i)
  }

  solveForPartOne(input: string): string {
    const splitIntoPairs = input.split('\n').map((pair) => pair.split(','))
    const listFromRange = splitIntoPairs.map((pair) => {
      const [first, second] = pair
      return [this.rangeToList(first), this.rangeToList(second)]
    })

    const totals = listFromRange.reduce((total, currentPair) => {
      const [first, second] = currentPair

      if (first.every((item) => second.includes(item)) || second.every((item) => first.includes(item))) {
        return total + 1
      }

      return total
    }, 0)

    return totals.toString()
  }

  solveForPartTwo(input: string): string {
    return input
  }
}

export default new Day4()

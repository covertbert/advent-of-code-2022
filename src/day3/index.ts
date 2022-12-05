import { Day } from '../day'

class Day3 extends Day {
  constructor() {
    super(3)
  }

  getScoreFromLetter(input: string): number {
    const characterCode = input.charCodeAt(0) - 96
    if (Math.sign(characterCode) === 1) {
      return characterCode
    }
    return characterCode + 58
  }

  solveForPartOne(input: string): string {
    const splitByNewLine = input.split('\n')

    const splitByCompartment = splitByNewLine.map((item) => [
      item.substring(0, item.length / 2),
      item.substring(item.length / 2, item.length),
    ])

    const reducedToDuplicates = splitByCompartment.reduce<string[]>((allRucksacks, currentRucksack) => {
      const [compartment1, compartment2] = currentRucksack
      const filteredByDuplicate = compartment1.split('').filter((item) => compartment2.includes(item))
      return [...allRucksacks, filteredByDuplicate[0]]
    }, [])

    return reducedToDuplicates
      .reduce<number>((total, currentRucksack) => {
        return total + this.getScoreFromLetter(currentRucksack)
      }, 0)
      .toString()
  }

  solveForPartTwo(input: string): string {
    return input
  }
}

export default new Day3()

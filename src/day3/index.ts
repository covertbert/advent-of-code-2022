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
    const splitByNewLine = input.split('\n')

    console.log(splitByNewLine.length)

    const rucksacksChunked = splitByNewLine.reduce((resultArray, item, index) => {
      const chunkIndex = Math.floor(index / 3)

      if (!resultArray[chunkIndex]) {
        return [...resultArray, [item]]
      }

      return [...resultArray.slice(0, -1), [...resultArray[chunkIndex], item]]
    }, [] as string[][])

    console.log(rucksacksChunked.length)

    const commonLetters = rucksacksChunked.reduce((allCommonLetters, currentRucksackChunk) => {
      const [first, second, third] = currentRucksackChunk
      const commonLetters: string[] = first
        .split('')
        .filter((letter) => second.includes(letter) && third.includes(letter))

      return [...allCommonLetters, ...commonLetters[0]]
    }, [])

    console.log(commonLetters.length)

    const totalScore = commonLetters.reduce(
      (runningTotal, currentLetter) => runningTotal + this.getScoreFromLetter(currentLetter),
      0,
    )

    return totalScore.toString()
  }
}

export default new Day3()

import day3 from './index'

const input = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`

describe('On Day 3', () => {
  it(`part1 is identity function`, () => {
    expect(day3.solveForPartOne(input)).toBe('157')
  })
  it(`part2 is identity function`, () => {
    expect(day3.solveForPartTwo(input)).toBe('70')
  })
})

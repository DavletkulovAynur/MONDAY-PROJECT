import { calcSumm } from '../helpers/calcArrayLength'

describe('calcSumm', () => {
    test('adds two positive numbers', () => {
        expect(calcSumm(2, 3)).toBe(5)
    })

    test('adds a positive and a negative number', () => {
        expect(calcSumm(5, -2)).toBe(3)
    })

    test('adds two negative numbers', () => {
        expect(calcSumm(-4, -6)).toBe(-10)
    })

    test('adds zero correctly', () => {
        expect(calcSumm(0, 5)).toBe(5)
        expect(calcSumm(5, 0)).toBe(5)
    })
})

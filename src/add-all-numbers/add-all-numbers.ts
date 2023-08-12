export const addAllNumbers = (numbers: number[]): number => {
    return numbers.reduce((acc, curr) => acc + curr, 0)
}

export const addAllNumbersRecursive = (numbers: number[]): number => {
    if (numbers.length === 0) return 0
    if (numbers.length === 1) return numbers[0]
    const [first, ...rest] = numbers
    return first + addAllNumbersRecursive(rest)
}

export const addAllNumbersIterative = (numbers: number[]): number => {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    return sum
}


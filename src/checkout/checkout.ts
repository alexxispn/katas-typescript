// @ts-ignore
export const checkout = (product: string): number => {
    if (product === 'A') return 50
    if (product === 'B') return 30
    if (product === 'C') return 20
    return 15
}


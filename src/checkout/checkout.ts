export const checkout = (products: string): number => {
    let total = 0
    const productsArray = products.split('')
    productsArray.forEach(product => {
        if (product === 'A') total += 50
        if (product === 'B') total += 30
        if (product === 'C') total += 20
        if (product === 'D') total += 15
    })
    return total
}


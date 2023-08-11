export const checkout = (products: string): number => {
    let total = 0
    const productsArray = products.split('')
    productsArray.forEach(product => {
        if (product === 'A') total += 50
        else if (product === 'B') total += 30
        else if (product === 'C') total += 20
        else if (product === 'D') total += 15
        else throw new Error('Invalid product')
    })
    return total
}


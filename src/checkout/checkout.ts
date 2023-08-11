enum Item {
    A = 'A',
    B = 'B',
    C = 'C',
    D = 'D',
}

interface SpecialOffer {
    quantity: number
    offerPrice: number
}

interface Product {
    item: Item
    price: number
    specialOffer?: SpecialOffer
}

const products: Product[] = [
    {item: Item.A, price: 50, specialOffer: {quantity: 3, offerPrice: 130}},
    {item: Item.B, price: 30, specialOffer: {quantity: 2, offerPrice: 45}},
    {item: Item.C, price: 20},
    {item: Item.D, price: 15},
]

const validateItem = (item: string): void => {
    if (!Object.values(Item).includes(item as Item)) {
        throw new Error('Invalid product')
    }
}

const calculateTotalPrice = (product: Product, quantity: number): number => {
    const {price, specialOffer} = product

    if (specialOffer && quantity >= specialOffer.quantity) {
        const specialOfferCount = Math.floor(quantity / specialOffer.quantity)
        const remainingItems = quantity % specialOffer.quantity
        return specialOfferCount * specialOffer.offerPrice + remainingItems * price
    }

    return quantity * price
}

export const checkout = (basket: string): number => {
    const basketItems = basket.split('')
    const countItems = new Map<Item, number>()
    basketItems.forEach(item => {
        validateItem(item)
        const itemKey = item as Item
        const itemCounter = countItems.get(itemKey) || 0
        countItems.set(itemKey, itemCounter + 1)
    })
    let totalPrice = 0

    for (const [item, quantity] of countItems.entries()) {
        const product = products.find(p => p.item === item)
        if (product) {
            totalPrice += calculateTotalPrice(product, quantity)
        }
    }

    return totalPrice
}

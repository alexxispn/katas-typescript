enum Item {
    A = 'A',
    B = 'B',
    C = 'C',
    D = 'D',
}

type Product = {
    item: Item;
    price: number;
    specialOffer?: { quantity: number; offerPrice: number };
};

const products: Product[] = [
    { item: Item.A, price: 50, specialOffer: { quantity: 3, offerPrice: 130 } },
    { item: Item.B, price: 30, specialOffer: { quantity: 2, offerPrice: 45 } },
    { item: Item.C, price: 20 },
    { item: Item.D, price: 15 },
];

export const checkout = (basket: string): number => {
    const basketItems = basket.split('');

    const countItems = new Map<Item, number>();
    basketItems.forEach(item => {
        if (!Object.values(Item).includes(item as Item)) {
            throw new Error('Invalid product');
        }
        countItems.set(item as Item, (countItems.get(item as Item) || 0) + 1);
    });

    let totalPrice = 0;
    for (const [item, quantity] of countItems.entries()) {
        const product = products.find(p => p.item === item);
        if (product) {
            const { price, specialOffer } = product;
            if (specialOffer && quantity >= specialOffer.quantity) {
                const specialOfferCount = Math.floor(quantity / specialOffer.quantity);
                const remainingItems = quantity % specialOffer.quantity;
                totalPrice += specialOfferCount * specialOffer.offerPrice + remainingItems * price;
            } else {
                totalPrice += quantity * price;
            }
        }
    }

    return totalPrice;
};

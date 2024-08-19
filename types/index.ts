type Product = {
    id: string,
    name: string,
    category: string,
    description: string,
    image: any,
    price: number
}

type CartItem = {
    id: string,
    name: string,
    image: any,
    price: number,
    quantity: number
}

export { Product, CartItem }
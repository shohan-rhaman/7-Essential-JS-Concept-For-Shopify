const numbers = [5, 10, 15, 20];

const result = numbers.some(num =>{
    return num > 12
})
console.log("Result>", result) // return True


// ============= Shopify Example ======================

const products = [
    { name: "Nike", stock: 5 },
    { name: "Adidas", stock: 0 },
    { name: "Watch", stock: 10 }
];
// Q: Is there at least one product that is out of stock?

const hasOutOfStock = products.some(product =>{
    return product.stock === 0
})
console.log("Out of stock", hasOutOfStock) // Return: true



//=============== Another Shopify Example ====================
const cart = [
    { name: "Nike", quantity: 2 },
    { name: "Watch", quantity: 1 }
];
// Q: Does the cart already contain a Watch?

const hasWatch = cart.some(product =>{
    return product.name === "Watch"
})
console.log("is watch exist", hasWatch) // Return: True
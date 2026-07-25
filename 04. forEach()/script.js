const numbers = [10, 20, 30];

numbers.forEach(number => {
    console.log(number);
});

// forEach() does not return a new array.
const result = numbers.forEach(item =>{
    return item * 2
})
console.log("Result", result);
// result undefined


// ================ Real Shopify Example 1 ==========================

const cart = [
    { name: "Nike", quantity: 2 },
    { name: "Watch", quantity: 1 }
];

// Display every product.
const productsName = cart.forEach(product =>{
    console.log("Products", product.name)
})
// output: Nike, Watch



// =================== Real Shopify Example 2 ===========================
const products = [
    { name: "Nike", price: 120 },
    { name: "Watch", price: 250 }
];

// Display Prices
const productPrice = products.forEach(product =>{
    console.log(`${product.name} - $${product.price}`)
})
// OutPut: Nike - $120, Watch - $250
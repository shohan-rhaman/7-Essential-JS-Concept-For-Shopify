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
const products = cart.forEach(product =>{
    console.log("Products", product.name)
})
// output: Nike, Watch
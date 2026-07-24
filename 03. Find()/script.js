const numbers = [5, 10, 15, 20, 25];

const result = numbers.find(number =>{
    return number > 10;
})
console.log("Result:", result) // (15) Returns only the first matching item. 


// Now lets make it by fillter()

const filterResult = numbers.filter(number =>{
    return number > 10;
})
console.log("Filter Result", filterResult) // [ 15, 20, 25 ] we will get array


// ================ Shopify Example ============================= \\
const products = [
    { id: 1, name: "Nike", price: 120 },
    { id: 2, name: "Adidas", price: 90 },
    { id: 3, name: "Watch", price: 250 }
];

// Suppose customer clicks on product ID 2. we need that product.
const product = products.find(product =>{
    return product.id === 2;
})
console.log("Specific Product", product)
const products = [
    { name: "Nike", price: 120 },
    { name: "Adidas", price: 90 },
    { name: "Watch", price: 250 }
];

// I only want the product names.

const names = products.map(product =>{
    return product.name;
})

console.log("product name>", names)
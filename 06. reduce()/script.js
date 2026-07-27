const numbers = [10, 20, 30];

const total = numbers.reduce((sum, number)=>{
    return sum + number;
}, 0)
console.log("Total Numbers", total) // Return: 60


// ============= Shopify Example 1 ===================
const cart = [
    { name: "Nike", quantity: 2 },
    { name: "Watch", quantity: 1 },
    { name: "Cap", quantity: 5 }
];
// Q: Calculate the total cart quantity.
const totalQuantity = cart.reduce((totalCart, product) =>{
    return totalCart + product.quantity
}, 0)
console.log("Total Cart", totalQuantity) // Return: 8
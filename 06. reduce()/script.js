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




// ================== Shopify Example 2 =======================
const cart2 = [
    { name: "Nike", price: 120 },
    { name: "Watch", price: 250 },
    { name: "Cap", price: 40 }
];
// Q: Calculate cart price.
const totalPrice = cart2.reduce((totalCart, product)=>{
    return totalCart + product.price
}, 0)
console.log("Total Cart Price:", totalPrice) // Return: 410




// ==================== accumulator (sum) ================
const numbers = [1, 2, 3];

const total = numbers.reduce((sum, number) => {
    console.log("Before:", sum, number);

    const result = sum + number;

    console.log("After:", result);

    return result;
}, 0);
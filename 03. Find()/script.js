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
console.log("Specific Product", product) // We get the whole object, not just the name.



// ============================ Real Shopify Example ===================================

const cart = [
    { id: 1, name: "Nike", quantity: 2 },
    { id: 2, name: "Watch", quantity: 1 },
    { id: 3, name: "Cap", quantity: 5 }
];

// The customer wants to update the quantity of product id = 2.

const foundCart = cart.find(product =>{
    // first we need to find it
    return product.id === 2;
})
// Now update the quantity
foundCart.quantity = 3;
console.log("Found Cart",foundCart);
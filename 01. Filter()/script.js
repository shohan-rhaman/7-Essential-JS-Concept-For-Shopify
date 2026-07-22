const products = [
  { title: "Nike Shoes", price: 120 },
  { title: "T-Shirt", price: 40 },
  { title: "Watch", price: 250 },
  { title: "Cap", price: 30 }
];

// Without filter()
const expensiveProducts = [];

for (const product of products) {
    if(product.price > 100){
        expensiveProducts.push(product)
    }
}

console.log("expensiveProducts>>", expensiveProducts)



// with filter()
const costlyProducts = products.filter(product =>{
    return product.price > 100
})

console.log("costlyProduct>>", costlyProducts)


// Shopify example
const productCards = Array.from(document.querySelectorAll(".card"))

// spread oporeator for making nodeList to array
//const productCards = [...document.querySelectorAll(".card")];

// ===== Now keep only shoes. ====== \\
const shoes = productCards.filter(card =>{
    return card.dataset.category === "shoes"
})

console.log("Shoes>>", shoes)


const numbers = [5, 12, 8, 25, 3];

/*
const greterNumbers = numbers.filter(number =>{
    return number > 10
    
})

console.log("greterNumbers", greterNumbers)
*/

// try it with forEach

const greaterNumbers = [];

numbers.forEach(num =>{
    if(num > 10){
        greaterNumbers.push(num)
    }
})

console.log("greateNumbers", greaterNumbers)
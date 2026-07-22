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
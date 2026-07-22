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

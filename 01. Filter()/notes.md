Now if uour client says:

"Show me only products that cost more than $100."

Without filter()

const expensiveProducts = [];

for (const product of products) {
    if (product.price > 100) {
        expensiveProducts.push(product);
    }
}

console.log(expensiveProducts);

Output:
[
  { title: "Nike Shoes", price: 120 },
  { title: "Watch", price: 250 }
]
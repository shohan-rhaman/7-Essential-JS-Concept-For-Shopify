Now if uour client says:

/* "Show me only products that cost more than $100." *\

## Without filter()

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

===============================================

/* But in JavaScript has a much easier way *\

## Using filter()

const expensiveProducts = products.filter((product) => {
    return product.price > 100;
});

console.log(expensiveProducts);

Output:
[
  { title: "Nike Shoes", price: 120 },
  { title: "Watch", price: 250 }
]


### What is filter() doing?

Think of a security guard.

Every person wants to enter a building.

The guard asks:

"Are you allowed?"

If YES ✅

Come in.

If NO ❌

Go home.


### The important rule:

filter() doesn't care about:

- positive
- negative
- zero

It only cares about:

- true or false


## Array Vs NodeList
Array
 ├── filter() ✅
 ├── map() ✅
 ├── sort() ✅
 └── forEach() ✅

NodeList
 ├── forEach() ✅
 ├── filter() ❌
 ├── map() ❌
 └── sort() ❌


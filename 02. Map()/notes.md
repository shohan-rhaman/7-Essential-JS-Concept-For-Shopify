- The map() function is used to transform a collection of data, such as an array or list, by applying a specific function to every item inside it. 

## Shopify Example

Suppose we have
const products = [
    { name: "Nike", price: 120 },
    { name: "Adidas", price: 90 },
    { name: "Watch", price: 250 }
];

The client says
## "I only want the product names."

const names = products.map(product => {
    return product.name;
});
console.log(names);

Output:
[
    "Nike",
    "Adidas",
    "Watch"
]

Notice something amazing.
Before:
[
    { name:"Nike", price:120 },
    { name:"Adidas", price:90 },
    { name:"Watch", price:250 }
]

After:
[
    "Nike",
    "Adidas",
    "Watch"
]

We transformed each object into a string.

============================================================================

## The easiest way to remember

Think of these four methods like employees in a company:

👷 forEach()
- "I'll visit every item and do some work."

🛂 filter()
- "Only approved people can enter."

Returns:
- true or false

🔀 sort()
- "Stand in the correct order."

Returns:
- negative
- positive
- zero

🎨 map()
- "Everyone gets a makeover."

Returns:
- new value
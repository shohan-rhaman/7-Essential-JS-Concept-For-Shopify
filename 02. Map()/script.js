const products = [
    { name: "Nike", price: 120 },
    { name: "Adidas", price: 90 },
    { name: "Watch", price: 250 }
];

const numbers = [5, 10, 15, 20];


// I only want the product names.
const names = products.map(product =>{
    return product.name;
})
console.log("product name>", names) 


// Show every product with a 10% discount.
const discountPrices = products.map(product =>{
    return product.price * 0.9
})
console.log("discount prices>", discountPrices)


// create a new array where every number is increased by 5
const increasedNumbers = numbers.map(number =>{
    return number + 5;
})
console.log("increased Number>", increasedNumbers);


// transform each product into a completely new string
const greetings = products.map(product =>{
    return `Welcome ${product.name}`
})
console.log("Greetings >", greetings)


// We can even return a new object with 10% discount
const discountProducts = products.map(product =>{
    return {
        name: product.name,
        discountPrice:  product.price * 0.9
    }
})
console.log("discount products>", discountProducts)


const storeProducts = [
    { name: "Nike", price: 120, stock: 5 },
    { name: "Adidas", price: 90, stock: 0 },
    { name: "Watch", price: 250, stock: 10 }
];

// we want to display products like this: "Nike - $120"

const storeUpdatedProducts = storeProducts.map(product =>{
    return `${product.name} - ${product.price}`
})
console.log("store updated products>", storeUpdatedProducts)


// Because filter() returns a new array. And arrays have a .map() method.
const availableProducts = storeProducts
    .filter(product => {
        return product.stock > 0;
    })
    .map(product => {
        return `${product.name} ($${product.price})`;
    });

console.log(availableProducts);




const martProducts = [
    {
        title: "Nike Shoes",
        vendor: "Nike"
    },
    {
        title: "Adidas Shoes",
        vendor: "Adidas"
    },
    {
        title: "Puma Shoes",
        vendor: "Puma"
    }
];



function showProducts(vendorName){
    martProducts.forEach(product =>{
        if(product.vendor === vendorName){
            console.log(product.title)
        }
    })
}

showProducts("Puma")
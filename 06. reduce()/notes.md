## Syntax

const result = array.reduce((accumulator, currentValue) => {
    return updatedAccumulator;
}, initialValue);


const numbers = [10, 20, 30];
const total = numbers.reduce((sum, number)=>{
    return sum + number;
}, 0)

sum = 0;

Most beginners think the accumulator (sum) is magic. It isn't. It simply stores whatever you returned last time.

============================================================

## Comparison

| Method    | Returns         |
| --------- | --------------- |
| map()     | New array       |
| filter()  | New array       |
| find()    | One item        |
| some()    | true / false    |
| forEach() | undefined       |
| reduce()  | One final value |



==============================================================

## When do Shopify developers use reduce()?

Very often. Examples:

✅ Total cart price
= $450

✅ Total quantity
= 12 items

✅ Total discount
= $50 saved

✅ Total tax
= $32



=================================================

## Why reduce() is perfect here

Imagine you have 100 products. Would you do this?

const total =
cart[0].price * cart[0].quantity +
cart[1].price * cart[1].quantity +
cart[2].price * cart[2].quantity +
// ...

❌ Impossible to maintain.

Instead:

const total = cart.reduce(...); works whether you have:
- 3 products ✅
- 30 products ✅
- 3,000 products ✅
## Syntax

const result = array.reduce((accumulator, currentValue) => {
    return updatedAccumulator;
}, initialValue);


const numbers = [10, 20, 30];
const total = numbers.reduce((sum, number)=>{
    return sum + number;
}, 0)

sum = 0;

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

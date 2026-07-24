## 📚 Today's Lesson: find()

Imagine you enter a shoe store. You ask the salesperson:

"Bring me the first Nike shoe."

The salesperson doesn't bring all Nike shoes. He brings only the first one he finds.

That's exactly what find() does.


--------------------------------------------

## If nothing is found
const product = products.find(product => {
    return product.id === 100;
});
console.log(product);

Output: undefined

Because there is no product with ID 100.


-------------------------------------------

## find() vs filter()

## Method	                 Returns

filter()	                 Array
find()	                     One item (or undefined)
map()	                     New transformed array
forEach()	                 undefined
sort()	                     Sorted array
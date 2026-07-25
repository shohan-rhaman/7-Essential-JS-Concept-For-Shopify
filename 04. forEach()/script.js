const numbers = [10, 20, 30];

numbers.forEach(number => {
    console.log(number);
});

// forEach() does not return a new array.
const result = numbers.forEach(item =>{
    return item * 2
})
console.log("Result", result);
// result undefined
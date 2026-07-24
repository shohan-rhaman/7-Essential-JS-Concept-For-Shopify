const numbers = [5, 10, 15, 20, 25];

const result = numbers.find(number =>{
    return number > 10;
})
console.log("Result:", result) // (15) Returns only the first matching item. 


// Now lets make it by fillter()

const filterResult = numbers.filter(number =>{
    return number > 10;
})
console.log("Filter Result", filterResult) // [ 15, 20, 25 ] we will get array
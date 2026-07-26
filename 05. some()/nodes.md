## What is some()?

Imagine you're a teacher. You have 100 students.

You ask yourself: "Has at least one student passed the exam?" You don't need to know who all passed.
- You only need one yes or no answer.

That's exactly what some() does.


=================================================================

## Syntax

const result = array.some(item => {
    return condition;
});

It always returns:
                  - true
                  - false

Nothing else.


==========================================================

## Real Shopify Situation

Suppose a user clicks Add to Cart.

Before adding, you want to check: "Is this product already in the cart?"
You don't need the whole object.

You only need to know:
                      - Yes
                           or
                      - No

Perfect use case:

const exists = cart.some(item => item.id === 5);

if (exists) {
    console.log("Already in cart");
}


=======================================================
## find() vs filter() vs some()

Method                                  Return
find()    --------------------------    First matching item
filter()  --------------------------    New array of all matches
some()    --------------------------    true or false



## 🧠 Memory Trick

Imagine you're looking for a red shirt in a store.

find()
Bring me the first red shirt.
Returns: 👕



filter()
Bring me every red shirt.
Returns: 👕 👕 👕



some()
Is there any red shirt?
Returns: Yes ✅ or No ❌
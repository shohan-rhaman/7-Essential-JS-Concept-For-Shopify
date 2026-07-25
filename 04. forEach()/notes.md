## 📚 JavaScript forEach()
What is forEach()?

Think of a classroom with 5 students. You want to greet every student.

- You don't want to collect them.
- You don't want to find one.
- You don't want to transform them.

You just want to do one action for every student. That's exactly what forEach() does.

=> forEach() does not return a new array. ❓Why?

Because forEach() ignores your return. Imagine JavaScript saying:

"I don't care what you return. My only job is to run your function for every item."

So this: return number * 2; is simply ignored.


##### Difference between forEach(), map(), filter(), find()

Here's the easiest way to remember it

Imagine four workers.

🧑 Worker 1: forEach()

Boss says: "Go knock on every door." 
Worker knocks on every door.
Boss asks: "What did you bring back?"
Worker: "Nothing. You only told me to knock."

Returns: undefined

=========================================================

🧑 Worker 2: map()

Boss says: "Go to every house and collect the house number."

Worker returns: [101, 102, 103]

==========================================================

🧑 Worker 3: filter()

Boss says: "Bring me every house that has a red door."

Worker returns:
[
  House 2,
  House 5,
  House 8
]

============================================================

🧑 Worker 4: find()

Boss says: "Bring me the first house with a red door."

Worker returns: House 2 



#### More Example

Here's a trick

When reading a question, look for these keywords:

Keyword in the question       ||        	Method

Every / Transform	                        map()
First	                                    find()
All	                                        filter()
Any / At least one / Exists	                some()
Do something with each	                    forEach()



### For More example:

Get all products under $100.
➡️ filter()


Get the first product under $100.
➡️ find()


Is there any product under $100?
➡️ some()


Print every product.
➡️ forEach()


Create a list of every product name.
➡️ map()
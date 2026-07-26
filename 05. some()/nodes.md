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
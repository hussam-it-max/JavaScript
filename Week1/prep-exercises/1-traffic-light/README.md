# Prep exercise - traffic light

Let's have a deeper look at the working of traffic lights this week so that we can practice logic and loops. In `traffic-light-1.js` and `traffic-light-2.js` you will find the same requirements but with different ways of representing the traffic light. Have a look through the files and solve them so you can see how the way we represent data affects the way we need to solve problems.

## Things to think about

- Which way of representing the traffic light did you find better? Why?
i found the second one better because it is more effective in case I want to expand the exercise. I can just enter new values into the array without editing each statement. This is helpful if I have a lot of values to check, as I won't need to write a separate condition for each one 
-
- What happens if you change the loop to a `do-while` loop instead of a `while` loop? Why?
If i use a do-while loop  the code inside the loop will execute at least once before checking the condition. So even if cycle is already 2, the loop will still run one more time before the condition is checked.
- We could have also used a `for` loop to make the traffic light do 2 full rotations. Do you think that would be better? Why or why not?
No because using for will execute only two times, but with while, as long as the condition is true, the code will execute until the condition is false. That is what the program is looking for.


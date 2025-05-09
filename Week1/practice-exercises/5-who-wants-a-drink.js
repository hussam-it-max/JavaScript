/**
 * You're at a party and you feel thirsty! However, you've got 5 friends who are also in need of a drink. Let's go get them a drink.
 *
 * Declare a variable that holds an empty array, called drinkTray.
 * Create a loop that runs 5 times. On each iteration, push a drink into the drinkTray variable. The drinkTray can only hold at most two instances of the same drink type, for example it can only hold 2 colas, 2 lemonades, 2 waters.
 * 
 * Log to the console: "Hey guys, I brought a [INSERT VALUES FROM ARRAY]!" (For example: "Hey guys, I brought a cola, cola, lemonade, lemonade, water!")
 */

// There are 3 different types of drinks:
const drinkTypes = ['cola', 'lemonade', 'water'];
const drinkTray = [];

let colaCount = 0;
let lemonadeCount = 0;
let waterCount = 0;

for (let i = 0; i < 5; i++) {
    for (x of drinkTypes) {
        if (x === 'cola') {
            if (colaCount < 2) {
                drinkTray.push(x);
                colaCount++;
                break;
            }
        }
        else if (x === 'lemonade') {
            if (lemonadeCount < 2) {
                drinkTray.push(x);
                lemonadeCount++;
                break;
            }
        }
        else {
            if (waterCount < 2) {
                drinkTray.push(x);
                waterCount++;

                break;
            }
        }
    }

};
console.log("Hey guys, I brought a " + drinkTray.join(', ') + "!");
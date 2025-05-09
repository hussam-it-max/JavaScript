/**
 * Keep track of which books you read and which books you want to read!
 *  
 * Follow the steps:
 *  Declare a variable that holds an array of 3 objects, where each object describes a book and has properties for the title (string), author (string), and alreadyRead (boolean indicating if you read it yet).
 *  Loop through the array of books.
 *  For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
 *  Create a conditional statement to change the log depending on whether you read it yet or not. If you read it, log a string like You already read "The Hobbit" right after the log of the book details
 *  If you haven't read it log a string like You still need to read "The Lord of the Rings"
 */
const Books = [
    { title: 'code of Shadows', author: 'J.D.Mercer', alredayRead: 'true' },
    { title: 'Whispers of the Forgotten', author: 'Eleanor Hart', alredayRead: 'false' },
    { title: 'Echoes of Tmorrow', author: 'Kai Winter', alredayRead: 'false' },

];
for (let x of Books) {
    console.log(`${x.title} by ${x.author}`);
    if (x.alredayRead === "true") {
        console.log('yes i have already read it');
    }
    else {
        console.log('i still need to read it');
    }

}

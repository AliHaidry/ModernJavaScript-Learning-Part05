/** Simple function */
const sayHello = function ()
{
    console.log("Hello!");
}

sayHello();

/** Arrow function */

const sayGreet = () => {
    console.log("What's up");
}

sayGreet();


/** Arrow function more compact example */
// One line function does not need braces.
const bye = () => console.log("Nice to meet you!");

bye();

/** Arrow function with string example */
// One line returns.
const sayHelloOne = () => 'Hello my friend';

console.log(sayHelloOne());

/** Arrow function with object literal example */
// Return Object.
const sayHelloTwo = () => ({msg: 'Hello my friend you are awesome'});

console.log(sayHelloTwo());

/** Arrow function with parameter example */
// single parameter does not need parenthesis.
const sayHelloThree = name => console.log(`Hello ${name}`);
sayHelloThree('Brad');


// Multiple parameters need parenthesis.
const sayHelloFour = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);
sayHelloFour('Brad','John');


/** Array of users with simple function */
const users = ['Ali', 'John', 'Mady'];
const nameLengths = users.map(function(name) {
    return name.length;
});
console.log(nameLengths);

/** Array of users with arrow function */
const newUsers = ['John', 'Mady', 'William'];
const nameNewLengths = newUsers.map((newName) => {
    return newName.length;
});
console.log(nameNewLengths);
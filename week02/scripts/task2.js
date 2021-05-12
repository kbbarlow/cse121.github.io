/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
const fullname ='Brooke Barlow';
// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').textContent = fullname;
// Step 3: declare and instantiate a variable to hold the current year
const currentyear ='2021';
// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').textContent= currentyear;
// Step 5: declare and instantiate a variable to hold the name of your picture
const picture ='images/smallbrooke.jpeg';
// Step 6: copy your image into the "images" folder
// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('img').setAttribute('src',picture);



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const favoritefoods =['pizza', ' cookies', ' ice cream', ' indian food', ' hamburgers', ' roasted veggies' ];
// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').textContent= favoritefoods;
// Step 3: declare and instantiate a variable to hold another favorite food
const anotherfavoritefood= ' roast';
// Step 4: add the variable holding another favorite food to the favorite food array
favoritefoods.push(anotherfavoritefood);

// Step 5: repeat Step 2
document.querySelector('#food').textContent= favoritefoods;

// Step 6: remove the first element in the favorite foods array
favoritefoods.shift();

// Step 7: repeat Step 2
document.querySelector('#food').textContent= favoritefoods;

// Step 8: remove the last element in the favorite foods array
favoritefoods.pop();

// Step 7: repeat Step 2
document.querySelector('#food').textContent= favoritefoods;


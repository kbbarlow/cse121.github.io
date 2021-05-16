/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
const myself = {
  name: 'Brooke Barlow',
  photo: 'images/smallbrooke.jpeg',
  favoriteFoods: ['pizza', 'apples', 'hamburgers', 'indian food', 'ice cream'],
  hobbies: ['Mountain biking', 'hiking', 'walking', 'gardening', 'pickleball'],
  placesLived: [
    {
      place: 'Coeur dAlene, ID',
      length: '29 years'
    },
    {
      place:'Highland, UT',
      length:'11 years' 
    }
  ]
};
document.querySelector('#name').textContent =myself.name;
document.querySelector('#photo').setAttribute('src', myself.photo);
document.querySelector('#photo').setAttribute('alt', myself.name);
let foods1 = document.createElement('li');
foods1.textContent = myself.favoriteFoods[0];
let foods2 = document.createElement('li');
foods2.textContent = myself.favoriteFoods[1];
let foods3 = document.createElement('li');
foods3.textContent = myself.favoriteFoods[2];
let foods4 = document.createElement('li');
foods4.textContent = myself.favoriteFoods[3];
let foods5 = document.createElement('li');
foods5.textContent = myself.favoriteFoods[4];
document.querySelector('#favorite-foods').appendChild(foods1);
document.querySelector('#favorite-foods').appendChild(foods2);
document.querySelector('#favorite-foods').appendChild(foods3);
document.querySelector('#favorite-foods').appendChild(foods4);
document.querySelector('#favorite-foods').appendChild(foods5);
let hobbies1 = document.createElement('li');
hobbies1.textContent = myself.hobbies[0];
let hobbies2 = document.createElement('li');
hobbies2.textContent = myself.hobbies[1];
let hobbies3 = document.createElement('li');
hobbies3.textContent = myself.hobbies[2];
let hobbies4 = document.createElement('li');
hobbies4.textContent = myself.hobbies[3];
let hobbies5 = document.createElement('li');
hobbies5.textContent = myself.hobbies[4];
document.querySelector('#hobbies').appendChild(hobbies1);
document.querySelector('#hobbies').appendChild(hobbies2);
document.querySelector('#hobbies').appendChild(hobbies3);
document.querySelector('#hobbies').appendChild(hobbies4);
document.querySelector('#hobbies').appendChild(hobbies5);
let place1lived = document.createElement('dt');
place1lived.textContent=myself.placesLived[0].place;
let place1length = document.createElement('dd');
place1length.textContent=myself.placesLived[0].length;
let place2lived = document.createElement('dt');
place2lived.textContent=myself.placesLived[1].place;
let place2length = document.createElement('dd');
place2length.textContent=myself.placesLived[1].length;
document.querySelector('#places-lived').appendChild(place1lived);
document.querySelector('#places-lived').appendChild(place1length);
document.querySelector('#places-lived').appendChild(place2lived);
document.querySelector('#places-lived').appendChild(place2length);

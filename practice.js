console.log("you're doing great!");

//     for(let i = 1; i <= 100; i++){

//     if(i % 3 === 0 && i % 5 === 0){
//         console.log(`${i}: chicken monkey`)
//     }
//     else if(i % 3 === 0){
//         console.log(`${i}: chicken`)
//     }
//     else if(i % 5 === 0){
//         console.log(`${i}: monkey`)
//     }
//     else{
//         console.log(i)
//     }
// }

// const findVowels = str => {
//     let count = 0
//     const vowels = ['a', 'e', 'i', 'o', 'u']
//     for(let char of str.toLowerCase()){
//         if(vowels.includes(char)){
//             count ++
//         }
//     }
//     return count
// }

// console.log(findVowels("oooooo"));

/* *** TASK *** 
Reverse a string but maintain special characters 
in their original index position
*/ 

function reverseString(str) {
  // converting the string to an array of separate characters
  let stringToArray = str.split("");
  // creating an empty array to store the characters in reverse order
  let reverseArray = [];
  /* creating an empty object to store the index of special 
  characters as a key and the character itself as the value */
  let characterObj = {};
  // iterate over the string for the length of the string
  for (let i = 0; i < str.length; i++) 
  {
    // variable eachCharacter stores a single character from beginning of the array
    let eachCharacter = stringToArray.shift();
    // variable not equal to a character A-Z upper or lower case
    let allCharacters = /[^a-zA-Z]/;
    // compare each character to the regex
    if (eachCharacter.match(allCharacters)) 
    {
      // if the character matches, add it to the characterObj
      characterObj[`${i}`] = eachCharacter;
    } 
    // otherwise, add it to the beginning of the reverseArray
    else reverseArray.unshift(eachCharacter);
  }
  /* iterate over the characterObj and splice the special characters
  back into their original position*/
  for (let key in characterObj) {
    reverseArray.splice((key), 0, characterObj[key]);
  }
  // return the array and join it back into a string
  return reverseArray.join('');
}
// console log return of reverseString function
function logRevString(reverseString) {
  console.log(reverseString);
}

let revString = reverseString("g0ldf1s#");
// log result
logRevString(revString);

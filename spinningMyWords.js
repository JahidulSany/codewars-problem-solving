// Write a function that takes in a string of one or more words, and returns the same string, 
// but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. 
// Spaces will be included only when more than one word is present.

const spinningWords = (string) => {
  let words = string.split(' ').map(str => {
    if(str.length >= 5) {
      str = str.split('').reverse().join('');
    }
  return str;
}).join(' ');
  console.log(words);
}
spinningWords('React is a javaScript library');

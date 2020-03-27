let words= $('commonWords') //grabs words from commonWords array list
let guesses=[]// Guesses is an empty array that i will be push letters to
let lives = 8 // created a variable for lives
let remainingLetters= commonWords.length// .length will be set to the length of the unknown word
let word = words [Math.floor(math.random() * words.length)]// will [pick a random word from Words array]

$('').on('click',function(){
    
if(!word.includes(letter)){// if word does not included letter then deduct 1 life
    lives--
}
if (!guesses.includes(letter)){//if guesses does not include letter then push to guesses array
    guesses.push(letter)
    guesses()
}


})


// I need to know how to choose a word from the commonWords array
// do i create buttons for alphabet??
//what is math.floor?
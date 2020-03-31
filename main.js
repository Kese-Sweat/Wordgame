var commonWords = [
    "the","of","and","a","to","in","is","you","that","it","he",
    "was","for","on","are","as","with","his","they","I","at","be",
    "this","have","from","or","one","had","by","word","but","not",
    "what","all","were","we","when","your","can","said","there",
    "use","an","each","which","she","do","how","their","if","will",
    "up","other","about","out","many","then","them","these","so",
    "some","her","would","make","like","him","into","time","has",
    "look","two","more","write","go","see","number","no","way",
    "could","people","my","than","first","water","been","call",
    "who","oil","its","now","find","long","down","day","did","get",
    "come","made","may","part"]
let guesses=[]// Guesses is an empty array that  will receive letter
let lives = 8 // created a variable so i can track lives

let word = commonWords[Math.floor(Math.random() * commonWords.length)];// will generate a random number for commonWords

function myDashes(){
let dashes = '';
for(let i = 0; i < word.length; i++) {// i starts at 0 and goes up to the length of word.length which will be a random word
    dashes = dashes + ' _'
    console.log(dashes)
    $('#answer').html(dashes)
  
 }
}

console.log(word)
myDashes()

let letter= ['a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

let myList = letter.map(item =>{
    return `<button>${item}</button>`
}).join('')

$('#letterList').html(myList)// will inject mylist to letterList in html

$('button').on('click',function(){
let letter = $(this).html()
    guesses.push(letter)
    console.log(guesses)
    if (word.includes(letter)){// got to return dashes
       
        let dashes = '';
        for(let i = 0; i < word.length; i++)
         {// i starts at 0 and goes up to the length of word.length which will be a random word
            let currentLetter = word.charAt(i)
            if (guesses.includes(currentLetter)) {
                dashes = dashes + currentLetter
                
            } else { 
                dashes = dashes + ' _'
            }

            
            console.log(dashes)
            
        
        }
        $('#answer').html(dashes)
       
       }
    
   //$('#answer').html(letter)


if(!word.includes(letter)){// if word does not include letter then deduct 1 life
    lives--

    //if (lives ===0) return lose
    $('#lives').html(lives)

}

//$('#answer').html(letter)

if (!word.includes(letter)){//if guesses does not include letter then push to guesses array
    guesses.push(letter)
    
        
}
})














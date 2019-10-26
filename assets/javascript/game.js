// global variables
//=======================================================
// create an array of letters
const letters = ['rihanna','riri'
];
// choose letter randomly
let randNum = Math.floor(Math.random() * letters.length);
let choosenLetter = letters[randNum];
let rightWord = [];
let wrongWord = [];
let underscores = [];
console.log(choosenLetter);

// dom munipilation
let docunderscore = document.getElementsByClassName('underscore');
let docRightGuess = document.getElementsByClassName('rightGuess');
let docWrongGuess = document.getElementsByClassName('wrongGuess');
//Main
//=======================================================

// creat underscores based on length of word 
let generateUnderscores = () => {
    for (let i = 0; i < choosenLetter.length; i++) {
        underscores.push('_');
    }
    return underscores;

}
console.log(generateUnderscores());
//get users choice
document.addEventListener('keypress', (event) => {
    // convert keycode into letter 
    let keyWord = String.fromCharCode(event.keyCode);
    console.log(event);
    console.log(keyWord);
    // if users guest is right
    if (choosenLetter.indexOf(keyWord) > -1) {
        console.log(true);
        // add to right word array
        rightWord.push(keyWord);
        console.log(rightWord);
        // replace underscore with right letter
        underscores[choosenLetter.indexOf(keyWord)] = keyWord;
        docunderscore[0].innerHTML = underscore.join(' ');
        docRightGuess[0].innerHTML = rightWord;
        console.log(underscores);
        if (underscores.join('') == choosenLetter) {
            alert('You Win')
        }

    } else {
        wrongWord.push(keyWord)
        console.log(wrongWord);
        docWrongGuess[0].innerHTML= wrongWord;
    }
})

docunderscore[0].innerHTML() = generateUnderscores().join('');
console.log(docunderscore);


// check if guess is right 
// if right push to right array 
// if wrong push to wrong array 
// global variables
//=======================================================
// create an array of letters
const letters = ['rihanna','riri'
];
// choose letter randomly
let randNum = Math.floor(Math.random() * letters.length);
var choosenLetter = letters[randNum];
var rightWord = [];
let wrongWord = [];
let underscores = [];
var loss=0;
var win=0;
console.log(choosenLetter);
console.log (randNum)
// dom munipilation
var docunderscore = document.getElementById('underscore');
var docRightGuess = document.getElementById('rightGuess');
var docWrongGuess = document.getElementById('wrongGuess');
var docloss = document.getElementById('loss');
var docwins = document.getElementById('wins');
//Main
//=======================================================

// creat underscores based on length of word 
let generateUnderscores = () => {
    for (let i = 0; i < choosenLetter.length; i++) {
        rightWord.push('_');
    }
    return rightWord;

}
console.log(generateUnderscores());
//get users choice
document.addEventListener('keypress', (event) => {
    // convert keycode into letter 
    let keyWord = String.fromCharCode(event.keyCode);
   // console.log(event);
    console.log(keyWord);

wrongWord.push(keyWord);

for (let i = 0; i < choosenLetter.length; i++) {
    if (choosenLetter.charAt(i)  === keyWord) {
        rightWord[i]=keyWord 
        console.log(rightWord);
      //  console.log(wrongWord);
    }

    
        
    
}

if (wrongWord.length >10 ) { 
    loss++; 
console.log(loss);

}

if (!rightWord.includes('_')){
    win++; console.log(win);
}



    // if users guest is right
  //  if (choosenLetter.indexOf(keyWord) > -1) {
     //   console.log(true);
        // add to right word array
      //  rightWord.push(keyWord);
        //console.log(rightWord);
        // replace underscore with right letter
     //   underscores[choosenLetter.indexOf(keyWord)] = keyWord;
       // docunderscore[0].innerHTML = underscore.join(' ');
      //  docRightGuess[0].innerHTML = rightWord;
      ///  console.log(underscores);
      //  if (underscores.join('') == choosenLetter) {
     //       alert('You Win')
      //  }

   // } else {
   //     wrongWord.push(keyWord)
   //     console.log(wrongWord);
   //     docWrongGuess[0].innerHTML= wrongWord;
  //  }
  docRightGuess.textContent = rightWord.join(' ');
  docloss.textContent = "Loss:" + loss;
  docwins.textContent = "Wins: " + win;
  docWrongGuess.textContent = wrongWord.join(' ');

})

//docunderscore[0].innerHTML = generateUnderscores().join('');
//console.log(docunderscore);

///docRightGuess.textContent = rightWord.join(' ');


// check if guess is right 
// if right push to right array 
// if wrong push to wrong array 
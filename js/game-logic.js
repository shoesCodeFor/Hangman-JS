// Tools Declaration
// Borrowed from: https://gist.github.com/efenacigiray/9367920
function replaceAt(string, index, replace) {
    if(index == (string.length-1)){
        console.log('The last char')
    }
    var reply = string.substring(0, index) + replace + string.substring(index + 1);
    console.log(reply);
    return reply;


}
// Because I don't like to type
var cLog = function (el){console.log(el)};



var gameObj = {
    wordList: ["Mighty Mouse", "Underdog", "Speedy Gonzales", "Speed Racer"], //, "Underdog"
    guesses: 0,
    selectedWord:"",
    guessedWord:"",
    displayStr: "",
    badGuesses:[],
    selectWord: function (){
        var wordIndex = Math.floor(Math.random() * this.wordList.length);
        this.selectedWord = this.wordList[wordIndex];
        this.lengthenWords();
    },
    lengthenWords: function(){
        this.guessedWord = this.formatDisplayStr(this.selectedWord);
        document.getElementById('word-panel').textContent = this.guessedWord;
    },
    formatDisplayStr: function (str){
        for(var i = 0; i < str.length; i++){
            if(str.charAt(i) === " "){
                this.displayStr += "\u0020";  // Using the Unicode space fixes this for some reason
            }
            else{this.displayStr += "_"}
        }
        console.log(this.displayStr);
        return this.displayStr;
    },
    startGame: function (){
        this.selectWord();
    },
    checkGuess: function(char){
        for(var i =0; i < this.selectedWord.length; i++){
            if(this.selectedWord[i].toLowerCase() === char){
                this.guessedWord = replaceAt(this.guessedWord, i, this.selectedWord[i]);
                this.showWord();
                console.log(this.guessedWord);
            }
            else{
                this.badGuesses.push(char);
            }

        }
        if(this.playerWins)
        {

        }
    },
    playerWins: function () {
        return (this.guessedWord === this.selectedWord ? true:false);
    },
    endGame: function () {
        window.location.reload();
    },
    giveUp: function (){
        this.showWord();
    },
    showWord: function (){
        var displayStr = document.querySelector("#word-panel");
        displayStr.innerHTML = this.guessedWord;
    },
    victoryDance: function () {
        console.log('You Win!!');
    },
    sadStance: function () {
        console.log('You Lose :(  Better luck next time...');
    }
};

// Tests
gameObj.selectWord();
// cLog(gameObj.badGuesses);





// // Game Logic
// const startGame = function (){
//     gameObj.selectWord();
// };
//
// const endGame = function () {
//     window.location.reload();
// };
//
// const giveUp = function (){
//     showWord();
// };
// const win = function(){
//     showWord();
//     victoryDance();
// };
// const lose = function () {
//
// };
//
// // Trigger on win or giveUp
// const showWord = function (){
//     console.log(gameObj.selectedWord);
// };
// // Play some music and an animation
// const victoryDance = function () {
//
// };
// const totalFailure = function (){
//
// };
// var wordToGuess = "Pasta"; // Just an example, your real word should come from an array
//
// var displayWord = "_ "; // Will provide on blank space
// var guessedWord = " ";
// displayWord = displayWord.repeat(wordToGuess.length); // will create a display string "_ _ _ _ _ "
// guessedWord = guessedWord.repeat(wordToGuess.length); // will create an empty string as long as the wordToGuess
// console.log(displayWord + '?');
//
//
// if(!wordToGuess.includes(guessedWord)){
//     /* Then the user has not won the game
//     You characters to check will go down here....
//
//     Something like an outside function that check on character to see if its in the wordToGuess, but not in the guessedWord
//     */
//
// }

// var guessedWord = "";
// var randomItem = "Parlor";
// var guessedCharacter = "r";
//
//
//
//
//
//
// function blankSpaces(){
//     for(var i; i < randomItem.length; i++){
//         if(randomItem[i] === " "){
//             guessedWord += " ";
//         }
//         else{
//             guessedWord += "_";
//         }
//     }
// }
// blankSpaces();
// console.log(guessedWord);
//
// for(var i =0; i < randomItem.length; i++){
//     if(randomItem[i].toLowerCase() === guessedCharacter){
//         guessedWord = replaceAt(guessedWord, i, guessedCharacter);
//     }
// }
//
// console.log(guessedWord);

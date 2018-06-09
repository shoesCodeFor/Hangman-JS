// Tools Declaration
// Borrowed from: https://gist.github.com/efenacigiray/9367920
function replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
}
// Because I don't like to type
var cLog = function (el){console.log(el)};



var gameObj = {
    wordList: ["Mighty Mouse"], //, "Underdog"
    guesses: 0,
    selectedWord:"",
    guessedWord:" ",
    displayStr: "",
    badGuesses:[],
    selectWord: function (){
        var wordIndex = Math.floor(Math.random() * this.wordList.length);
        this.selectedWord = this.wordList[wordIndex];
        this.lengthenWords();
    },
    lengthenWords: function(){
        var repeatLength = this.selectedWord.length;
        this.guessedWord = this.guessedWord.repeat(repeatLength);
        this.formatDisplayStr(this.selectedWord);
    },
    formatDisplayStr: function (str){
        for(i in str){
            if(str.charAt(i) === " "){
                this.displayStr += "  ";
            }
            else{this.displayStr += "_ "}
        }
    },
    startGame: function (){
        this.selectWord();
    },
    checkGuess: function(char){
        if(this.selectedWord.includes(char) && !this.guessedWord.includes(char)){
            var i = this.selectedWord.indexOf(char);
            this.guessedWord = replaceAt(this.guessedWord, i, char);
        }
        else{
            this.badGuesses.push(char);
        }
    },
    didPlayerWin: function () {
        return this.is(this.guessedWord, this.selectedWord);
    },
    endGame: function () {
        window.location.reload();
    },
    giveUp: function (){
        this.showWord();
    },
    showWord: function (){
        var displayStr = document.querySelector("#displayed-word");
        displayStr.textContent(this.selectedWord);
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
console.log(gameObj.selectedWord);
console.log(gameObj);
gameObj.checkGuess('o');
gameObj.checkGuess('M');
gameObj.checkGuess('5');
console.log(gameObj.guessedWord);
cLog(gameObj.badGuesses);





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
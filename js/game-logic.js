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

// Theme song - Saddle up
var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "assets/audio/TGTBTU.mp3");

var gameObj = {
    wordList: ["Mighty Mouse", "Underdog", "Speedy Gonzales", "Speed Racer", "Bugs Bunny", "Daffy Duck",
                "Wiley Coyote", "The Roadrunner"],
    lives: 0,
    selectedWord:"",
    guessedWord:"",
    displayStr: "",
    gameStatus:"stopped",
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
        this.lives = 20;
    },
    checkGuess: function(char){
        for(var i =0; i < this.selectedWord.length; i++){
            if(this.selectedWord[i].toLowerCase() === char){
                this.guessedWord = replaceAt(this.guessedWord, i, this.selectedWord[i]);
                this.showWord();
                console.log(this.guessedWord);
            }
            else if(i === (this.selectedWord.length-1) && !this.selectedWord.toLowerCase().includes(char)){
                this.badGuesses.push(char);
                this.lives--;
                console.log(this.badGuesses);
            }

        }
        if(this.selectedWord.includes(this.guessedWord))
        {
            console.log("Victory!! You Win");
        }
        this.showLives();
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
    showLives: function (){
        var displayDiv = document.querySelector("#lives-count");
        displayDiv.innerHTML = this.lives;
    },
    victoryDance: function () {
        console.log('You Win!!');
    },
    sadStance: function () {
        console.log('You Lose :(  Better luck next time...');
    }
};

document.addEventListener('keyup', function(e){
    console.log('Key Clicked');
    if(gameObj.gameStatus === "stopped"){
        gameObj.gameStatus = "started";
    }
    else if(gameObj.gameStatus === "started" && gameObj.lives > -1){
        console.log("Key Pressed: " + e.key);
        gameObj.checkGuess(e.key);
    }
});

// Tests
gameObj.startGame();
// cLog(gameObj.badGuesses);




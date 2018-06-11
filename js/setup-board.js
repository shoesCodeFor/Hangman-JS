/**
 * This file performs a layout command on the screen for buttons
 *
 *
 *
 **/

const keys = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
              'n', 'o','p','q','r','s','t','u','v','w', 'x','y','z'];
const keysDiv = document.querySelector("#letters");
console.log(keysDiv);
keys.forEach(function (element) {
    let btn = document.createElement('button');
    btn.setAttribute('class', 'btn btn-secondary');
    btn.textContent = element;
    btn.addEventListener('click', function(){
        gameObj.checkGuess(element);
        console.log('Letter Selected: ' + element);
    });
    keysDiv.append(btn);
});


// Not used yet, but soon
function buildKB(targetDiv){
    let div = document.createElement('div');
    let btn = document.createElement('button');
    btn.setAttribute('class', 'btn btn-secondary');
    btn.textContent = element;
    btn.addEventListener('click', function(){
        gameObj.checkGuess(element);
        console.log('Letter Selected: ' + element);
    });
    keysDiv.append(btn);
}
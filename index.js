const { spy } = require("chai");

function receivesAFunction(secretAgent) {
    secretAgent();
}

function spyWords(){
    return 'The names bond, james bond'
}

function jamesBond() {
    spyWords();
}

function returnsANamedFunction() {
    return jamesBond;
}

let anon = function anonFunction() {
   
}
function returnsAnAnonymousFunction() {
   return function(){};  
}
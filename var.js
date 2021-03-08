var myVar = 'global';
 //myOtherVar = 'global';

function myFunction( ) {
    var myVar = 'local';
    return myVar;
}

function myOtherVarFunction() {
    myOtherVar = 'Local';
    return myOtherVar;
}

console.log(myVar);
console.log(myOtherVar);
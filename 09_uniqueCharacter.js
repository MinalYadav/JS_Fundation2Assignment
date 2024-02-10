/*
    9. As a web developer, you need to create a function that takes a username string as input and 
    checks if it contains only unique characters. Use a Set to implement this efficiently
    uniqueCharactersCheck("mithun") // OUTPUT: The input string contains unique characters.
    uniqueCharacters Check("anurag")
    / OUTPUT: The input string contains duplicates. /

*/

function uniqueCharactersCheck(name) {
    
    for (let i = 0; i < name.length; i++) {
        for (let j = i+1; j < name.length; j++) {
            if (name[i] == name[j]) {
                return false;
            }   
        }
    }
    return true;    
}

let uname="meenal";
let bool = uniqueCharactersCheck(uname);
// console.log(bool);

if (bool) {

    console.log("The input string contains unique characters")

} else {
    
    console.log("The input string contains duplicates.");
}
/*
    10. As a web developer, your task is to build a function that examines a sentence and 
    counts how many times each unique word appears in it. Using a Map, 
    the function efficiently keeps track of the occurrence of each word in the sentence.
    
*/

function wordCounter(sen) {
    let a = sen.trim().split(" ");
    let x = a.map((vlaue)=>{
        let count = 0;
        for (let i = 0; i < a.length; i++) {
            if (vlaue == a[i]) {
               count++; 
            }
            
        }
        // console.log(`${vlaue} => ${count}`);
        return `${vlaue} ${count}`
    })

    return x;
   
}

const sentence =" please please submit your assignment on time your assignments are importent ";
const result = wordCounter(sentence);
console.log(result);

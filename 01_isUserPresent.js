/*
 1. Imagine you are working for a social media company. You have a list of all the users.
    Your job is to create a function that checks if a specific username is in that list. 
    The function should take the username as input and tell you whether it's present in the list of users or not.
*/

const users=["user1","user2","user3","user4","user5"];

// let result = users.find(findItem);

// function findItem(item) {
//     return item =="user4";
    
// }

// function findItem((item),this.username) {
//     return item ==this.username;
    
// }
// console.log(result);

function isUserPresent(username) {

    for (const uname in users) {

        if (users[uname]==username) {
            return `Yes,${username} is a valid user`;
        }
    }
    return `NO,${username} is not a valid user`;
    
}

let result = isUserPresent("user4");

console.log(result);

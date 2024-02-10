/*
    8. Let's say you are working for an event management company.
    As a web developer, you need to build a countdown timer for an upcoming event. 
    You need to build a function that calculates the number of days between the current date and the event's start date.

*/



function countdownTimer(eveDate,currDate) {
    const oneDayTime = (1000 * 3600 * 24);
    let diffTime = eveDate.getTime() - currDate.getTime(); // Calculating the time difference between two dates
    let numDays =(diffTime / oneDayTime);  // Calculating the no. of days between two dates
    return numDays; 
}

let eventDate = new Date(2024,2,14);
console.log("Event Date : ",eventDate.toDateString());
let currentDate = new Date(); 
console.log("Current Date : ",currentDate.toDateString());
// let DaysLeft = Math.floor(countdownTimer(eventDate,currentDate)).toString();
let DayLeft = Math.round(countdownTimer(eventDate,currentDate)).toString();
console.log(`Number of days between current date and event date : ${DayLeft}`);

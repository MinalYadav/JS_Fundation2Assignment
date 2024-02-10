/*
    7. Imagine you are working for a digital banking platform, and your team is tasked with improving the security of
    customer accounts.
    Your challenge is to create a function that generates a random 4-digit OTP (One- Time Password) for authentication purposes.

    console.log("Here is your otp: ${generate0tp())");
*/
 function generate0tp() {
    //const otp = Math.floor(Math.random()*10000);//9999 tak mai kuch bhi value de sakta hai
    const otp = Math.floor(Math.random() * 9000 + 1000);
    return otp ;
 }

console.log(`Here is your OTP : ${generate0tp()}`);

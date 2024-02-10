/*
    2. Imagine you work for an e-commerce company. Your task is to create a function that takes the prices of all the products in a customer's cart as input parameters. 
    The function should then calculate and return the total sum of all the product prices. 
    This will help the company easily calculate the total cost of the customer's shopping cart.
*/


const prices =[230,34,523,232,43,443,432,123];

let totalSum = prices.reduce((res,item)=>{
    return res+item ;
});

console.log("Total sum",totalSum);
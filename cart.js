///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/

//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
  {
    name: "pizza",
    price: 9.99,
  },
  {
    name: "pasta",
    price: 8.99,
  },
  {
    name: "salad",
    price: 7.99,
  },
];

//CODE HERE

const summedPrice = cart.reduce((accumulator, currentItem) => {
  return accumulator + currentItem.price;
}, 0);

console.log(`Total cost of all food items: $${summedPrice.toFixed(2)}`);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(cartTotal, couponValue, tax) {
  const taxAmount = cartTotal * tax;

  const finalPrice = cartTotal + taxAmount - couponValue;

  return finalPrice;
}

const cartTotal = 100;
const couponValue = 10;
const tax = 0.06;

const finalPrice = calcFinalPrice(cartTotal, couponValue, tax);
console.log(
  `Final price after applying tax and coupon: $${finalPrice.toFixed(2)}`
);
//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
firstName (String):
Data Type: String
Explanation: This property would store the customer's first name. Using a string data type is suitable because it allows for flexibility in handling different names and ensures compatibility with text-based operations.

lastName (String):
Data Type: String
Explanation: Similar to firstName, this property would store the customer's last name. Again, using a string data type is appropriate for handling textual information.

emailAdress (String):
Data Type: String
Explanation: The customer's email address is crucial for order confirmation and communication. Using a string data type is suitable for storing email addresses, as they are typically text-based and require validation.

cartItems (Array of Objects):
Data Type: Array
Explanation: This property would represent the items the customer has added to their cart. Using an array allows for easy management of multiple items and their details.
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customer = {
  firstName: "Carol",
  lastName: "Baskin",
  emailAdress: "carolbaskin@email.com",
  cartItems: [
    {
      itemName: "Pizza",
      itemPrice: 12.99,
      quantity: 1,
    },
    {
      itemName: "Salad",
      itemPrice: 7.99,
      quantity: 1,
    },
  ],
};

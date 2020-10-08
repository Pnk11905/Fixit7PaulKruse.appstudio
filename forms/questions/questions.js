// 3) Question: How many times will this FOR loop print an alert message to the user? 

// It will print 6 times an alert message 

// 4) Question: What is the minimum number of times this loop will iterate (run)? 
  
//The minimum amount this loop will run is 1. However if you run the program you will receive 5 different alert pop ups

// 6) - Question: What is the difference between a global and a local variable in Javascript? Explain and give an example of how each is written and used in a program. 

/*
JavaScript variables have only two scopes. Global Variables − A global variable has a global scope which means it can be defined anywhere in your JavaScript code. Local Variables − A local variable will be visible only within a function where it is defined 

Example Global Variable :

var carName = "Mercedes Benz";

function myFunction() {

}

carName is the global variable 


Example Local Variable:

function myFunction() {

  let countryName = "Germany";
  
}

countryName is the Local Variable 
*/

// 7) Question: Why are global variables considered 'bad'?

/* 
Every JavaScript file included in the page runs in the same scope. If you have global variables scripts included after yours that contain the same variable will overwrite your variables. 
*/

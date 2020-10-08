// 8) - String methods
// b) Create a variable named quoteString and put this string in it: 

let quoteString = "Failure is simply the opportunity to begin again this time more intelligently."

// c) Using a string method, change the text in quoteString to all upper case and save it in a new variable named upperCaseString. Use this format for your output to the console:

let upperCaseString = quoteString.toUpperCase()

console.log(`Upper case string is: ` + upperCaseString)

// d) Create a new variable named authorString and put this text in it. 

let authorString = "- Henry Ford"

// e) Then create a new variable completeString that holds a new string created by  adding the author (in authorString) on the end of the string in quoteString. Then create a new variable named 'found' that outputs a message as to whether the string "Henry" was in the string in 'completeString' or not. Output the message in this format to the console

let completeString = quoteString + authorString
console.log(`The string in completeString is: ${completeString}`)
let found
if (completeString.includes("Henry") == true) {
  found = 'Henry was in the quote string'
} else {
  found = 'Henry was NOT in the quote string'
}
console.log(found)

// f) Now create a new string variable named secondQuote and put this string in it: 

let secondQuote = "Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. - Stephen King"

// g) Using a string method, change the text in secondQuote to all lower case and save it in a new variable named lowerCaseString. Use this format for your output to the console:

let lowerCaseString = secondQuote.toLowerCase()

console.log(`lower case string is: ` + lowerCaseString)

// h) Get a number from the user using 'prompt'. Then add 10 to the number and output it to the console in the format:

let num3 = Number(prompt('Enter a number to be added by 10'))

function addinput(x, y) {
  return x + y
}

let sumNum = addinput(num3, 10);

alert(`The number ${num3} + 10 is ${sumNum}.`)

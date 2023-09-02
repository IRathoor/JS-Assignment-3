//Assignment 3

//Q1
var username = prompt("Enter Name")
alert("Hi, " + username)

//Q2 
var num = prompt("Enter Number")
if (num === "") {
    num = 5
}
alert(num + " x  1 = " + num * 1 + "\n"
    + num + " x 2 = " + num * 2 + "\n"
    + num + " x 3 = " + num * 3 + "\n"
    + num + " x 4 = " + num * 4 + "\n"
    + num + " x 5 = " + num * 5 + "\n"
    + num + " x 6 = " + num * 6 + "\n"
    + num + " x 7 = " + num * 7 + "\n"
    + num + " x 8 = " + num * 8 + "\n"
    + num + " x 9 = " + num * 9 + "\n"
    + num + " x 10 =" + num * 10 + "\n")

//Q3
var city = prompt("Please enter your city name")
if (city === "Karachi") {
    alert("Welcome to city of Light")
} else ("Welcome to other city")

//Q4
var gender = prompt("Gender")
if (gender === "Male") {
    alert("Good Morning Sir")
} else if (gender === "Female") {
    alert("Good Morning Madam")
} else {
    alert("Error! Please either write 'male' or 'female'")
}

//Q5
var color = prompt("Signal Color")
if (color === "red") {
    alert("Vehicles must stop")
} else if (color === "yellow") {
    alert("Vehicles should get ready to move")
} else if (color === "green") {
    alert("Vehicles can move now")
} else ("write correct color")

//Q6
var maxAge = prompt("Enter your max age")
var age = prompt("Enter your age")
if (age <= maxAge) {
    alert("You are Welcome")
}

var age = prompt("Your age")
if (age >= 43 && age <= 75) {
    alert(" You are Welcome");
}

//Q7
var liter = prompt("Fuel")
if (liter <= 0.25) {
    alert("Please refill the fuel in your car")
}

//Q8
a.true
b.false
c. Condition1= false Condition2= true Condition3= false Condition4= true
d. True
e. True
f. True

//Q9
var Maths = prompt("Enter Maths Marks")
var English = prompt("Enter English Marks")
var Urdu = prompt("Enter Urdu Marks")
var totalMarks = prompt("Enter Total Marks")
var obtainedMarks = +Maths + +English + +Urdu
var percentage = obtainedMarks / totalMarks * 100

if (percentage >= 80) {
    alert("A One with " + percentage + "%.")
} else if (percentage >= 70) {
    alert("A with " + percentage + "%.")
} else if (percentage >= 60) {
    alert("B with " + percentage + "%.")
} else {
    alert("Fail with " + percentage + "%.")
}

//Q10
var itemName1 = prompt("Name of Item 1")
var itemName2 = prompt("Name of Item 2")
var priceItem1 = prompt("Price of " + itemName1)
var priceItem2 = prompt("Price of " + itemName2)
var item1Qty = prompt("Ordered quantity of " + itemName1)
var item2Qty = prompt("Ordered quantity of " + itemName2)
var shippingCharges = prompt("Shipping Charges")
var totalCost = +priceItem1 * +item1Qty + priceItem2 * +item2Qty + +shippingCharges
var discount = +totalCost * .1
var finalAmount = +totalCost - +discount
if (totalCost >= 2000) {
    alert("Price of " + itemName1 + " is " + priceItem1 + "\nQuantity of " + itemName1 + " is " + item1Qty + "\nPrice of " + itemName2 + " is " + priceItem2 + "\nQuantity of " + itemName2 + " is " + item2Qty + "\n\nShipping Charges: " + shippingCharges + "\n\nTotal cost of your order is " + totalCost + " PKR \nDiscounted Price is " + finalAmount + " PKR"
    )
} else {
    alert("Price of " + itemName1 + " is " + priceItem1 + "\nQuantity of " + itemName1 + " is " + item1Qty + "\nPrice of " + itemName2 + " is " + priceItem2 + "\nQuantity of " + itemName2 + " is " + item2Qty + "\n\nShipping Charges: " + shippingCharges + "\n\nTotal cost of your order is " + totalCost + " PKR")
}

//Q11
var secretNumber = (7)
var user = prompt("Guess the Secret Number")
if (secretNumber == user){
    alert ("Bingo! Correct answer")
} else {
    alert ("Close enough to the correct answer")
}

//Q12
 var divisible = prompt("Show the message to the user if the number is divisible by 3")
if (divisible % 3 ===0) {
    alert ("This number is divisible")
} else { alert("This is not a divisible number")
}

//Q13
var team1 = ("Karachi Kings")
var team2 = ("Lahore Zalmi")
var teamA =prompt("Karachi Kings Score")
var teamB = prompt("Lahore Zalmi Score")
if (teamA > teamB){
    alert (team1+ " Won the match")
} else if (teamB > teamA){
    alert (team2+ " Won the match")
} else if (teamA==teamB){
    alert ("The match is tie")
}

//Q14
var a = ("Pakistan")
var b = (92)
var c = (true)
alert(a + " is a string")
alert(b + " is a number")
alert(c + " is a boolean")

//Q15
var userInput = prompt("Enter a number:");
if (userInput % 2 === 0) {
    alert(userInput + " is an even number.");
} else {
    alert(userInput + " is an odd number.");
}

//Q16
var t = prompt("Temp")
if (t >= 10 && t <= 19) {
    alert("OMG! Today’s weather is so Cool")
} else if (t >= 20 && t <= 29) {
    alert("Today’s Weather is cool")
} else if (t >= 30 && t <= 39) {
    alert("The Weather today is Normal")
} else if (t >= 40) {
    alert("It is too hot outside")
}

//Q17
var firstNumber = prompt("Select First Number")
var secondNumber = prompt("Select Second Number")
var Operator = prompt("Select Operator +,-,*,/,%")

if (Operator==="+") {
    alert (+firstNumber + +secondNumber)
} else if (Operator==="-"){
    alert (firstNumber - secondNumber)
} else if (Operator==="*"){
    alert (firstNumber * secondNumber)
} else if (Operator==="/"){
    alert (firstNumber / secondNumber)
} else if (Operator==="%"){
    alert (firstNumber & secondNumber)
} else { alert ("Select Correct Operator" )
}

//Q18
var day = prompt("Select day")
if (day==="Monday"){
    alert ("Its weekday")
} else if (day==="Tuesday"){
    alert ("Its weekday")
}else if (day==="Wednesday"){
    alert ("Its weekday")
}else if (day==="Thursday"){
    alert ("Its weekday")
}else if (day==="Friday"){
    alert ("Its weekday")
}else if (day==="Saturday"){
    alert ("Its weekend")
}else if (day==="Sunday"){
    alert ("“Yay! It’s a holiday")
}

//Q19
var num = prompt("Write a Score")
if (num >= 50) {
    alert("You are Passed")
} else {
    alert("Try again!")
}

//Q20
 var num1 = prompt("Write a Number1")
 var num2 = prompt("Write a Number2")
 if (num1 > num2){ 
    alert ("The greater number of" +num1+ " and" +num2+ " is" +num1)
 } else if (num2 > num1){
    alert ("The greater number of" +num1+ " and" +num2+ " is" +num2)
 } else if (num1===num2){
    alert ("Equal")
 }
 
//Q21
var language = prompt ("Hello World translate in Spanish, Danish, English")
if (language=="Spanish"){
    alert ("Hola Mundo")
} else if (language==="Danish"){
    alert ("Hej Verden")
}else if (language==="English"){
    alert ("Hello World")
} else{
    alert ("Select only given languages")
}

//Q22
 var num = prompt ("Please insert a number")
 if (num < 0){
    alert ("It's a Negative Number")
 } else { alert("Its a Positive Number ")
 }
 
//Q23
var number = prompt ("Please Enter Number")
var noun = prompt ("Please Enter Noun")
    alert(+number+ " " + noun)

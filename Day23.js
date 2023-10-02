let first_name = "chinmay"
let last_name = "deshpande"
let middle_name ="shirish"

console.log(typeof first_name)
console.log(typeof last_name)
console.log(typeof middle_name)

//program 2
//string stores the value by index

let city = "pune"
//0  1  2  3
//p  u  n  e
console.log(city[0])
console.log(city[1])
console.log(city[2])
console.log(city[3])

let city2 = "chandrapur"
// 0 1 2  3 4 5 6 7 8 9
// c h a  n d r a p u r 

for(i = 0; i < 10; i++){
    //console.log(i)
    console.log(city2[i])
}

for(let i = city2.length - 1 ; i >= 0 ; i--){
    console.log(city2[i])
}

//string + string ====>string
//number + string ====>string
//string + number ====>string
//number + number ====>number

let a = 10
let b = 5
let c = "hello"

console.log(a+b)
console.log(a+b+c)
console.log(c+a+b)
console.log(c+b+a)

//string + number + number
//"hello" + "10" ===>"hello10" + 5 ==> "hello105"

//number + number + string
//10 + 5 ===> 15 + "hello" ===>"15hello"

//string concatination

first_name = "chinmay"
last_name = "deshpande"

//My firstName is chinmay and lastName is deshpande

console.log("My firstName is "+ first_name+ " and my lastName is "+last_name)
console.log(`My firstName is ${first_name} and my lastName is ${last_name}`)

//object --->
//string object ---- properties and method

let firstName = "chinmay"
//0 1 2 3 4 5 6 
//c h i n m a y
let q1 = firstName.length
console.log(q1)

//methods
//toUpperCase

let lastName = "deshpande"
let q2 = lastName.toUpperCase()
console.log(q2)

//toLowerCase

let middleName = "SHIRIsh"
let q3 = middleName.toLowerCase()
console.log(q3)

//includes
let fruits = "apple grapes mango"
let q4 = fruits.includes("a")
let q5 = fruits.includes("gra")
let q6 = fruits.includes("p")
let q7 = fruits.includes(" ")
console.log(q4)
console.log(q5)
console.log(q6)
console.log(q7)

//indexOf
let cities = "Hello World"
//H e l l o    W o r l d
//0 1 2 3 4  5 6 7 8 9 10
let a1 = cities.indexOf("H")
console.log(a1)
let a2 = cities.indexOf("W")
console.log(a2)
let a3 = cities.indexOf(" ")
console.log(a3)
let a4 = cities.indexOf("h")
console.log(a4) //-1


//Array methods

//push() => new length 
let names = ["chinmay","shirish","ram","sham"]
names.push("shraddha")
console.log(names)


//unshift() => new length
let fruits = ["apple","mango","banana"]
fruits.unshift("chikoo")
console.log(fruits)

//pop() ==>removes last element and retur same
let cities = ["pune","banglore","kolkata"]
cities.pop()
console.log(cities)

//shift() == removes the first element and return same
cities.shift()
console.log(cities)

//map()
let birthYear = [1989,1990,1991,1992]
//[34,33,32,31]
let q1 = birthYear.map(function(el,index,arr){
    return 2023 - el
})
console.log(q1)

//filter()
let marks = [77,66,33,55,88,99]
//[77,88,99]
let q2 = marks.filter(function(el,index,arr){
    return el > 70
})
console.log(q2)

//reduce()
let nums = [11,22,33] //66
let q3 = nums.reduce(function(acc,el,index,arr){
    return acc + el 
},0)
console.log(q3)

//forEach()
let cities1 = ["nagpur","wardha","chennai"]
cities1.forEach(function(el,index,arr){
    console.log("welcome " + el)
})

//find()
//               0  1  2  3  4  5  6
let numbersB = [12,45,66,88,99,55,33]
//[66,88,99]

//filter()
let above60 = numbersB.filter(function(el,index,arr){
    return el > 60
})
console.log(above60)

//find()
let above60FE = numbersB.find(function(el,index,arr){
    return el > 60
})
console.log(above60FE)

//findIndex()
let above60FEI = numbersB.findIndex(function(el,index,arr){
    return el  > 60
})
console.log(above60FEI)

//every()
let numbers = [1,22,33,44,55,66,77,88]

let above10All = numbers.every(function(el,index,arr){
    return el > 10
})
console.log(above10All)

//some()
let above100One = numbers.some(function(el,index,arr){
    return el > 70
})
console.log(above100One)

//concat()
let numbersAA = [11,22,33]
let numbersBB = [44,55,66]
let numbersCC = numbersAA.concat(numbersBB)
console.log(numbersCC)

//join()
let info = ["chinmay","deshpande",7709192441]
let a = info.join(' ')
console.log(a)

// indexOf()
let flowers = ["rose","lily","jasmine","lotus"]
let indeOfJ = flowers.indexOf("jasmine")
console.log(indeOfJ)
let indeOfCJ = flowers.indexOf("Jasmine")
console.log(indeOfCJ)

//sort()
let cities3 = ["chennai","banglore","wardha","nagpur"]
cities3.sort()
console.log(cities3)

//reverse()
// [ 'banglore', 'chennai', 'nagpur', 'wardha' ]
cities3.reverse()
console.log(cities3)

//slice()
//slice(startIndex,endIndex(not included))
//                 0         1         2          3        4   
let countries = ["india","pakistan","china","srilanka","japan"]
//                 -5         -4       -3       -2        -1
console.log(countries.slice(1))
console.log(countries.slice(1,5))
console.log(countries.slice(-5,4))
console.log(countries.slice(1,-1))
console.log(countries.slice(4))
console.log(countries.slice(-1,-3))

//splice()
//splice(startIndex,numberOfElementToBedeleted,rpl1,rpl2)
//                 0         1         2          3        4   
let countries1 = ["india","pakistan","china","srilanka","japan"]
//                 -5         -4       -3       -2        -1
//countries1.splice(2,1)
//countries1.splice(1,2)
countries1.splice(1,2,"UK","USA")
console.log(countries1)

//flat()
let states = [
    ["Nagpur","Pune"],   //0
    ["Jaipur","Udaipur"], //1
    ["Indore","Bhopal"]   //2
]
console.log(states[0][1])
console.log(states[1][1])
console.log(states[2][1])
let allCities = states.flat()
console.log(allCities)

//at()
//                0       1      2        3
let animals = ["tiger","lion","rabbit","snake"]
//               -4      -3      -2       -1
console.log(animals.at(2))
console.log(animals.at(-3))

//fill()
//         0  1  2  3  4  5  6  7  8
let mks = [22,33,44,55,66,77,22,33,55]
mks.fill(undefined,3,7)
console.log(mks)

//includes()
let q111 = mks.includes(333)
console.log(q111)


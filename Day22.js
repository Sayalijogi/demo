//Array Methods

//Push()    ==>add element in last
let names = ["sayali","ashu","chinmay"]
names.push("ram")
console.log(names)

//Unshift()  ==>add element in start
let vegetables = ["potato","tomato","cabbage"]
vegetables.unshift("cauliflower")
console.log(vegetables)

//pop()  ==>removes last element
let cities = ["nagpur","pune","jaipur"]
cities.pop()
console.log(cities)

//shift()  ==>removes first element
let flowers = ["rose","lotus","lily"]
flowers.shift()
console.log(flowers)

//map()
let score = [12,34,78,90]
//+2 = >[14,36,80,92]

let plusTwo = score.map(function(el,index,arr){
    return el + 2
})
console.log(plusTwo)

//filter()
let marks = [44,55,66,77,88]
//[55,66,77,88]
let q1 = marks.filter(function(el,index,arr){
    return el > 50
})
console.log(q1)

//reduce()
let num = [5,10,15]
//30
let q2 = num.reduce(function(acc,el,index,arr){
    return acc + el
},0)
console.log(q2)

//forEach()
let countries = ["india","brazil","denmark"]
countries.forEach(function(el,index,arr){
    console.log("Hello " + el)
})

//find()

let numsA = [12,13,14,15,16,17,18,19]  //16
q3 = numsA.find(function(el,index,arr){
    return el > 15
})
console.group(q3)

//findIndex()
//           0   1  2  3  4  5
let numsB = [22,33,44,55,66,77]
q4 = numsB.findIndex(function(el,index,arr){
    return el > 30
})
console.log(q4)

//every()
let mks = [20,30,40,50,60]
q5 = mks.every(function(el,index,arr){
    return el > 10
})
console.log(q5)

//some()
let numsC = [1,22,33,44,55,66,77,88]
q6 = numsC.some(function(el,index,arr){
    return el > 70
})
console.log(q6)

//concat()
let A = [10,11,12]
let B = [13,14,15]
let C = A.concat(B)
console.log(C)

//join()
let info = ["sayali","jogi","8010045195"]
let a =info.join("-")
console.log(a)

//indexOf()
let cars = ["audi","bmw","brezza"]
let q7 = cars.indexOf("bmw")
console.log(q7)
let q8 = cars.indexOf("Brezza")
console.log(q8)

//sort()
let animals = ["lion","tiger","rabbit","cheetah"]
animals.sort()
console.log(animals)

//reverse()
animals.reverse()
console.log(animals)

//slice()
//slice(Start Index, End Index(not included))
//               0       1      2         3        4
let states = ["kerala","goa","punjab","odisha","sikkim"]
//              -5       -4     -3       -2      -1
console.log(states.slice(2))
console.log(states.slice(1,3))
console.log(states.slice(-5,4))
console.log(states.slice(1,-1))
console.log(states.slice(4))
console.log(states.slice(-1,-3))

//splice()
//splice(startIndex,numberOfElementToBedeleted,rpl1,rpl2)
//               0       1        2        3       4
let names1 = ["sayali","ashu","chinmay","janvi","kajal"]
//              -5       -4        -3      -2      -1
//names1.splice(2,1)
names1.splice(2,2)
console.log(names1)

///flat()
//                     0                   1                  2
//                0        1         0         1         0         1
let states1 = [["Nagpur","Pune"], ["Jaipur","Udaipur"],["Indore","Bhopal"]]
console.log(states1[0][1])
console.log(states1[1][1])
console.log(states1[2][1])
let allCity = states1.flat()
console.log(allCity)

///at()
//                0       1      2        3
let animals1 = ["tiger","lion","rabbit","snake"]
//               -4      -3      -2       -1
console.log(animals1.at(2))
console.log(animals1.at(-3))

//fill()
//           0  1  2  3  4  5  6  7  8
let grade = [22,33,44,55,66,77,22,33,55]
grade.fill(undefined,4,8)
console.log(grade)

//includes()
let numbers = [44,55,66,77,88,99]
let q9 = numbers.includes(888)
console.log(q9)


//slice 
//              0         1        2        3       4
let names = ["chinmay","sarika","poorva","satish","ram"]
// //              -5        -4       -3       -2       -1
// //names.slice(startIndex,endIndex(not included))
console.log(names.slice(2))
console.log(names.slice(1,4))
console.log(names.slice(-5,4))
console.log(names.slice(1,-2))
console.log(names.slice(-4))
console.log(names.slice(-1,-4))

//splice()

//               0         1        2        3         4    
let namesB = ["chinmay","sarika","poorva","satish","ramesh"]

// namesB.pop()
// console.log(namesB)

// namesB.shift()
// console.log(namesB)

//namesB.splice(startIndex,numberofelementTobeDeleted)
namesB.splice(3,1)
console.log(namesB)

namesB.splice(2,1)
console.log(namesB)

namesB.splice(3,2,"rahul","rohit")
console.log(namesB)

namesB.splice(4,2,"ashu","sayali")
console.log(namesB)


// //fill()
 //          0  1  2  3  4  5  6  7  8
let mrks = [11,22,33,44,55,88,99,44,55]
mrks.fill("pass" ,2,4)
console.log(mrks)

let country = ["india","bangladesh","china","america"]
let r2 = country.sort()
console.log(r2)

//join()
let info = [11,22,33]
let info2 = info.join("-")
console.log(info2)
console.log(typeof info2)

//concat()
let numsA = [11,22,33]
let numsB = [44,55,66]
let numsC = numsB.concat(numsA)
console.log(numsC)

//at()
//            0        1       2
let city = ["pune","nagpur","kolkata"]
//           -3       -2        -1
console.log(city[-2])
console.log(city.at(-2))
console.log(city[2])
console.log(city.at(2))

//flat()
//                    0                  1                   2
//                0       1        0         1          0         1
let fruits = [["apple","mango"],["cherry","grapes"],["chikoo","guava"]]
console.log(fruits[0][1])
console.log(fruits[1][1])
console.log(fruits[2][1])
let q5 = fruits.flat()
console.log(q5)


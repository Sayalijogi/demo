//                0       1       2        3         4        5   
let namesA = [ "ninad","sachin","rahul","suresh","ramesh","jatin"]
// console.log(namesA)
// namesA.pop()
// console.log(namesA)
// namesA.shift()
// console.log(namesA)

// namesA.splice(3,1)
// console.log(namesA)

// namesA.splice(2,2,"ram","sham")
// console.log(namesA)

//flat()
//                     0                    1                      2
//                 0        1          0        1             0          1
let statesA = [["NAGPUR","WARDHA"],["JAIPUR","UDAIPUR"],["BANGLORE","MYSORE"]]
let q2 = statesA.flat()
console.log(q2)

//at()

let info3 = ["chinmay","deshpande","770919241"] //mixed array
let q11 = info3.at(2)
console.log(q11)

// let info4 = [11,22,33,44,55] // array of numbers 
// let info5 = ["chinmay","shirsh","ram"] //array of string
// let info6 = [true , false , true] //array of boolean

let numbers = [11,22,33,44,55]
let r1 = numbers.map(function(el,index,arr){
    return el - 1
})
console.log(r1)

let h = ["pune","chennai","banglore"]
h.sort()
console.log(h)



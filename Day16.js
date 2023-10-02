//program 1 
//                 0    1    2    3
let birthyear = [1989,1990,1991,1992]
//[34,33,32,31]
let ages= []
for (let  i = 0; i < birthyear.length; i++) {
    //console.log(i)
    //console.log(birthyear[i])
    //console.log(2023 - birthyear[i])
     let a= 2023 - birthyear[i]
     ages.push(a)
}
console.log(ages)

//pop(),push(),shift(),unshift(),reverse(),includes(),index()

//map()
//             0    1    2    3
birthyear = [1989,1990,1991,1992]
let q1 = birthyear.map(function(el,index,arr){
    //console.log(el,index,arr)
    return 2023 - el
})
console.log(q1)

let numbers = [11,22,33,44,55]
let q3 = numbers.map(function(el,index,arr){
    return el + 2
})
console.log(q3)

//program 2 

let marks = [55,66,22,77,88,34,44]
//[55,66,77,88]
let above50 = []

for (let i = 0; i< marks.length; i++){
    if(marks[i] > 50){
        above50.push(marks[i])
    }
}
console.log(above50)

let q2 = marks.filter(function(el,index,arr){
    return el > 50
})
console.log(q2)

//program 3
let nums = [11,22,33]
let total = 0
for(let i = 0; i < nums.length; i++){
    total = total + nums[i]
    // 0 + 11 ==> 11
    // 11 + 22 ==>33
    //33 + 33 ==>66
}
console.log(total)

let q4 = nums.reduce(function(acc,el,index,arr){
    return acc + el //66
},0)
console.log(q4)


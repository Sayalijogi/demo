//program 1
let info = ["chinmay","deshpande",23,44]
console.log(info[0])
console.log(info[1])
console.log(info[2])
console.log(info[3])

//retrive by index
console.log(info[0])
//update
info[0] = "tanmay"
console.log(info)
//add
info.push("pune")
console.log(info)
info.unshift("Mr")
console.log(info)
//delete
info.pop()
console.log(info)
info.shift()
console.log(info)
info.splice(2,1)
console.log(info)

//Object literal

let info2 = {
    //key:"value"
    //property:"value"
    firstName:"chinmay",
    lastName:"deshpande",
    age:23,
    rollNo:44
}
console.log(info2)

//object stores the value by index ? No
console.log(info2[0])

//object allow duplicate keys
let vehicle = {
    color:"red",
    type:"sedane",
    model:"Q4",
    color:"blue"
}
console.log(vehicle)

let info3 = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:45,
    roolNo:77
}
//retrive //dot notation and bracket notation
console.log(info3.firstName)
console.log(info3['age'])

//update //dot notation and bracket notation
info.firstName = "tanmay"
console.log(info3)
info3['lastName'] = "dani"
console.log(info3)

//add //dot notation and bracket notation
info3.city = "pune"
info3['language'] = "hindi"
console.log(info3)

//delete //dot notation and bracket notation
delete info3.city
delete info3['language']
console.log(info3)

let names = ["chinmay","despande",35,66]
for(let i = 0; i < names.length; i++){
    console.log(names[i])
}

//looping over object (dot notation will not work)
//bracket notation
let animal = {
    color:"blue",
    eye:2,
    city:"pune",
    life:50
}

for(let x in animal){
    console.log(x,animal[x])
}

//Practice 
let info4 = {
    firstname:"sayali",
    lastname:"jogi"
}

console.log(info4['firstname'])
info4['firstname']='sakshi'
console.log(info4)
info4['city']='pune'
console.log(info4)
delete info4['city']
console.log(info4)

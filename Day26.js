let names = ["mayuri","sham","ram","sachin"]

//retrive
console.log(names[0])

//add
names.push("maya")
names.unshift("sham")
console.log(names)

//update
names[0] = "nitesh"
console.log(names)

//delete
names.pop()
names.shift()
names.splice(2,1)
console.log(names)

//object literal
// let info2 = ["chinmay","deshpande",23,45]

let info3 = {
    // prop : value
    // key : value
    firstName:"chinmay",
    lastName:"deshpande",
    age:23,
    rollNo:45,
    age:45
}

//object stores the value by index ??? ==>No
console.log(info3[0])

//object allowed duplicate values ==>No ,but its takes updated value of same name
console.log(info3)

//retrive (dot notation and bracket notation)

let info4 = {
    first_name:"chinamy",
    lastName:"deshpande"
}

console.log(info4.first_name)  //Dot notation
console.log(info4['lastName']) //Bracket notation

//update (dot notation and bracket notation)
info4.first_name="tanmay"
info4['lastName']="dani"
console.log(info4)

//add (dot notation and bracket notation)
info4.city="pune"
info4['language']="hindi"
console.log(info4)

//delete (dot notation and bracket notation)
delete info4.city
delete info4['language']
console.log(info4)

//Practice

let vehicle = {
    color :"blue",
    type: "sedane"
}

//Dot notation
//retrive
console.log(vehicle.color)
//update
vehicle.color="red"
console.log(vehicle)
//add
vehicle.city="pune"
console.log(vehicle)
//delete
delete vehicle.city
console.log(vehicle)

//Bracket notation
//retrive
console.log(vehicle['type'])
//update
vehicle['type']="SUV"
console.log(vehicle)
//add
vehicle['regNo']=1234
console.log(vehicle)
//delete
delete vehicle['type']
console.log(vehicle)

//loop in array
let numbers = [11,22,33,44,55]
for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i])
}

//looping in object
//dot notation will not work in loop in object
let animal = {
    color:"red",
    namee:"tiger"
}
for(let x in animal){
    console.log(x)
    console.log(animal[x])
}


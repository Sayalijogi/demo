console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)

//loops

//for loop and while loop

//for(initialization;conditionCheck; increment/decrement){
    //statements
//}

for(let i = 1; i<=5; i++) { //2 3 4 5 6
    console.log(i) //1 2 3 4 5
}

//1<=5 --true
//2<=5 --true
//3<=5 --true
//4<=5 --true
//5<=5 --true
//6<=5 --false

//program 2
for(let i=1 ; i<=3 ;i++){ //2 3 4
    console.log(i) //1 2 3
}

//program 3
for(let i=1 ; i<=3; i++){ //2 3 4
    console.log("hello") //"hello" "hello" "hello"
}

//program 4
for(let i=5 ; i>=1 ;i--){ //4 3 2 1 0
    console.log(i) //5 4 3 2 1
}

//program 5
for(let i=2 ; i<=20 ;i=i+2){ //4 6 8 10 12 14 16 18 20 22
    console.log(i) //2 4 6 8 10 12 14 16 18 20
}

//program 6
for(let i=50 ; i>=5 ; i=i-5){ //45 40 35 30 25 20 15 10 5 
    console.log(i) //50 45 40 35 30 25 20 15 10 5 
}
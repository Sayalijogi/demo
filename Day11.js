// for loop
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)

//print "hello" 3 tyms
for(let i=1 ;i<=3; i++){ //2 3 
    console.log(i) //"hello" ,"hello" ,"hello"
}


//print 1 to 5
for (let i=1 ;i<=5; i++){ //2 3 4 5 6
    console.log(i) //1 2 3 4 5
}

//print 5 to 1
for (let i=5 ; i>=1 ;i--){ //4 3 2 1 0
    console.log(i) //5 4 3 2 1
}

//table of 2
for(let i=2 ; i<=20 ; i=i+2){ //4 6 8 10 12 14 16 18 20 22
    console.log(i) //2 4 6 8 10 12 14 16 18 20
}

//table of 5 in reverse
for (let i=50 ; i>=5 ;i=i-5){ //45 40 35 30 25 20 15 10 5 0
    console.log(i) //50 45 40 35 30 25 20 15 10 5
}

//break
for(let i=1 ; i<=5 ;i++){ // 2 3
    if(i == 3){
        break
    }
    console.log(i) //1 2
}

for(let i=1; i<=5; i++){ // 2 3
    console.log(i) // 1 2 3
    if(i == 3){
        break
    }
}

for(let i =5; i>=1; i--){ //4 3 2
    if(i ==2){
        break
    }
    console.log(i) //5 4 3 
}

//continue

for(let i=1 ; i<=5; i++){ //2 3 4 5 6
    if(i == 3){
        continue
    }
    console.log(i) //1 2 4 5
}

// table of 30
for(let i = 3; i<=30; i=i+3){
    console.log(i)
}

//table of 30 in reverse
for(let i=30 ; i>=3 ; i=i-3){
    console.log(i)
}



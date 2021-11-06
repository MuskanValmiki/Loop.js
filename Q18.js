for (var i = 1; i <= 100; i++){
    console.log(i);
};
//here we print i to 100

for (var i = 1; i <= 100; i++){
    if(i % 7 ===0){
       console.log(i);
    };     
};
//here we print which is divisible by 7

var sum = 0
for (var i = 1; i <= 100; i++){
  sum = sum + i
};
console.log(sum);
//here we calculate the sum of 1 to 100

var sum = 0;
for (var i = 1; i <= 10; i++){
  const input = require('readline-sync');
  let number = input.questionInt('Enter the number');
  sum = sum +number
};
console.log(sum);
//we run the loop ten times and find the sum

for (var i = 1;i <= 10;i++){
    if (i%2===0){
       console.log(-i);
    }else{
       console.log(i);
    }
};
//here if number is divisible by 2 so add -sign
  
for(var i=1; i<= 100; i++){
    if(i%3 ===0 && i%7 === 0){
        console.log("NavGurukul");
    }
    else if (i%3 === 0){
        console.log("Nav");
    }
    else if (i%7 === 0){
        console.log("Gurukul");
    }
    else{
        console.log(i);
    }
};
// here we are check if i divisible 3 or 7 it gave navgurukul ,if it divisible 3 so it print nav and if it divisible by 7 so it gave gurukul.

 

var sum = 0;
for (var i = 50; i > 40; i--){
 const input = require('readline-sync');
 let number = input.questionInt('Enter the number');
 sum = sum +number
};
console.log(sum);
//here also we take ten user input and print sum but now initialization is differnt .

var i =156;
while (i<166){
   console.log(i-155);
   i+=1
}
// print 1 to 10 but initialization is 156
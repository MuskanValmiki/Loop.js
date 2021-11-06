var readlinesync = require("readline-sync")
var name = readlinesync.question("ENTER YOUR NAME := ") ;
var store = name ;
var empty = "" ;
for (var i =  store.length-1 ; i>=0 ; i--){
    empty+=store[i]
}
if (empty == name ){
    console.log("Palindrome");
}
else{
    console.log("Not palindrome")
}
// here we are checking it is palindrome or not

const n=require("readline-sync");
var name=n.question("enter name: ")
const store=name;
var string=""
for (let i=name.length-1;i>=0;i--) {
   string=string+name[i]
}
if (store===string) {
   console.log("its palindrome string");
}
else {
   console.log("it's not a palindrome string");
}
// palindrome number

var user = require("readline-sync");
var n = user.questionInt("enter any num=");
var x = 0;
var y = 1 ;
var z;
while (y<n){
    console.log(y)
    z = x + y
    x=y
    y= z 
    
}
// fibonacci series
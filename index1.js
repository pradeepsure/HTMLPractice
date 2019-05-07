
// const a = 'hello';
// console.log(`hey ${a}`);
// console.log(`hey ${a}`);

// let obj = {
//     a:1,
//     b:2
// };

// const objAr = Object.values(obj);

// console.log(objAr);


// const objArr = [];

// for(let i in obj){
//     objArr.push(i);
// }
// console.log(objArr);


// const object = {
//     x:1,
//     getX(){
//         const inner = ()=>{
//             console.log(this.x);
//         }
//         inner();
//     }
// };

// object.getX();


// const e = [1,3,5,4,2];
// const f = [2,1,7,9,8];
// const g = e.concat(f);
// console.log(g);

// function outer() {
//     var b = 10;
//     var c = 100;
//        function inner() {
            
//              var a = 20; 
//              console.log("a= " + a + " b= " + b);
//              a++;
//              b++;
//         }
//        return inner;
//     }
//     var X = outer();  // outer() invoked the first time
//     var Y = outer();  // outer() invoked the second time
//     //end of outer() function executions
    
//     X(); // X() invoked the first time
//     X(); // X() invoked the second time
//     X(); // X() invoked the third time
//     Y(); // Y() invoked the first time







///////////////////////////////////////



let array = ['pradeep','svns','kumar'];

console.log(`${array[0]} , ${array.length}`);

for(let i=0;i<array.length;i++){
    console.log(`${array[i]}`); 
}

let i=0;
while (array.length>i) {
    console.log(array[i]);
    i++
}

let index=0;
array.forEach(myFunction)
function myFunction(item,index){
    console.log(item); 
}

index = 0; 
array = [ 1, 2, 3, 4, 5, 6 ]; 
  
const under_five = x => x < 5; 
  
if (array.every(under_five)) { 
    console.log('All are less than 5'); 
} 
else { 
    console.log('At least one element is not less than 5'); 
}

index = 0; 
array = [ 1, 2, 3, 4, 5, 6 ]; 
  
let square = x => Math.pow(x, 2); 
let squares = array.map(square); 
console.log(array); 
console.log(squares);

////////////////////////////////////////////////////////////////////////////////






function reverseString(str) {
    // // Step 1. Use the split() method to return a new array
    // var splitString = str.split(""); // var splitString = "hello".split("");
    // // ["h", "e", "l", "l", "o"]
 
    // // Step 2. Use the reverse() method to reverse the new created array
    // var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // // ["o", "l", "l", "e", "h"]
 
    // // Step 3. Use the join() method to join all elements of the array into a string
    // var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // // "olleh"
    
    // //Step 4. Return the reversed string
    // return joinArray; // "olleh"

    // return str.split("").reverse().join("");

    let newString ="";
    for(let i=str.length;i>=0;i--){
        newString+=str[i];
    }
    return newString;

    //return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}
 
let reverse=reverseString("hello");
console.log(reverse);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function palindrome(str) {
    let re = /[^a-zA-Z0-9]/g
    let lowerStr = str.toLowerCase().replace(re,'');
    let riverStr = lowerStr.split("").reverse().join("");
    console.log(lowerStr==riverStr);
    
  }
  palindrome("A man, a plan, a canal. Panama");





  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  var getMax = function (str) {
    var max = 0,
    maxChar = '';
     str.split('').forEach((char)=>{
       if(str.split(char).length > max) {
           max = str.split(char).length;
           maxChar = char;
        }
     });
     console.log(maxChar);
   };

getMax('pradeepe') //5;

getMax('35538533') //3;


///////////////////////////////////////////////////////////

for(let number=1;number<=100;number++){
    if(number%7==0){
        console.log("SEVEN");    
    }
}
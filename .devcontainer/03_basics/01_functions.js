

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()                      //sayMyName = refecence  // () = Execution

// function addTwoNumbers(number1, number2){     // number1, number2 => parameters
//     console.log(number1 + number2);
// }
   function addTwoNumbers(number1, number2){
    //    let result = number1 + number2
    //    return result
    return number1 + number2

   }

// addTwoNumbers(3,4)  // 7   // (3,4) => Arugument
// addTwoNumbers(3, "4");   //34
// addTwoNumbers(3, "a");   // 3a
const result = addTwoNumbers(3,5)

// console.log("Result: ", result);   // undefined

function loginuserMessage(username){    // to avoid undefined you can add (username = "sam")
    if(username === undefined){       // or (!username)
      // console.log("Please enter a username");
      return ;       // Please enter a username
    }
    return `${username} just logged in`
}
// console.log(loginuserMessage("Hitesh"));  // Hitesh just logged in
// console.log(loginuserMessage(hitesh));   // undefined just logged in


// function calculateCartPrice (...num1){           // (...) => rest operator / Spread operator
        // return num1;
// }
// console.log(calculateCartPrice(200, 400, 500));   // [ 200, 400, 500 ]


function calculateCartPrice(val1, val2, ...num1){
  return num1;
}
// console.log(calculateCartPrice(200, 400, 500, 2000));  // [ 500, 2000 ]    // val1 = 200 // val2 = 400

const user = {
  username: "Hitesh",
  price: 199,
}
function handleObject(anyobject){
   console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user);  // Username is Hitesh and price is 199
handleObject({
  username: "sam",
  price: 399
})   // Username is sam and price is 399

const mynewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
     return getArray[1]
}
// console.log(returnSecondValue(mynewArray));  // 400
console.log(returnSecondValue([200, 400, 500, 1000]));   // 400


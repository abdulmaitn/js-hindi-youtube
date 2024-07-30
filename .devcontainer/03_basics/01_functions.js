

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
      console.log("Please enter a username");
      return ;       // Please enter a username
    }
    return `${username} just logged in`
}
// console.log(loginuserMessage("Hitesh"));  // Hitesh just logged in
console.log(loginuserMessage(hitesh));   // undefined just logged in

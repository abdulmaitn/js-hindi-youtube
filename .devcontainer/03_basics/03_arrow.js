const user = {
    username: "Hitesh",
    price: 999,


    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
    
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()


// console.log(this);


// function chai(){
//     let username = "hitesh";
//     console.log(this.username);   // undefined  ,, this only works in objects not in functions
// }
// chai();


// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);       // Undefined
// }




//const chai = () => {
    //let username = "hitesh"
    //console.log(this.username)  // undefined
//}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2      // Implicit method
// const addTwo = (num1, num2) => (num1 + num2);      // another form of implicit return
// const addTwo = (num1, num2) => {username: "hitesh"}   // undefined
const addTwo = (num1, num2) => ({username: "hitesh"})  // { username: `hitesh`}

console.log(addTwo(3,4));   // 7



const myArray = [2, 5, 3, 7, 8]

myArray.forEach(function () {})

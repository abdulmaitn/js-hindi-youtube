// singleton

// object literals

const mySym = Symbol("key1")

const Jsuser = {
    name: "Hitesh",
    "full name": "Hitesh choudhury",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(Jsuser.email)
// console.log(Jsuser["email"])
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mySym]);




Jsuser.email = "hitesh@chatgpt.com"
// Object.freeze(Jsuser)
Jsuser.email ="hitesh@microsoft.com"
// console.log(Jsuser)


Jsuser.greeting = function(){
    console.log("Hello Js user!");
}

Jsuser.greeting = function(){
    Jsuser.greetingTwo = function(){
        console.log(`Hello JS user, ${this.name}`);
    }
}
// console.log(Jsuser.greeting); // undefined
console.log(Jsuser.greeting());  // Hello Js user!
// console.log(Jsuser.greeting); // [Function (anonymous)]
console.log(Jsuser.greetingTwo());
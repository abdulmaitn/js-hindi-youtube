// const tinderUser = new Object();
const tinderUser = {}



tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false;
// console.log(tinderUser); // Outputs: {}


const regularUser = {
    email : "some@gmail.com",
    fullname: {
        userfullname : {
            firstname: "hitesh",
            lastname: "choudhary",
        }
    }
}
// console.log(regularUser.fullname);   // { userfullname: { firstname: 'hitesh', lastname: 'choudhary' } }
// console.log(regularUser.fullname.userfullname.firstname);  // hitesh


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"};

// const obj3 = { obj1, obj2}  // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// const obj3 = Object.assign(obj1, obj2);   // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// const obj3 = Object.assign({}, obj1, obj2);  // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3 = {...obj1, ...obj2}   // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(obj3);



// MDN Links : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign




const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "a@gmail.com"
    },
    {
        id: 3,
        email: "b@gmail.com"
    },
];

// console.log(users[1].email); // Correctly accessing the second user's email
// console.log(tinderUser); // Logging the tinderUser object  //{ id: '123abc', name: 'Sammy', isLoggedIn: false }

// console.log(Object.keys(tinderUser));  //  [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser));   // [ '123abc', 'Sammy', false ]
// console.log(Object.entries(tinderUser));   // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty(`isLoggedIn`));   // true

// console.log(tinderUser.hasOwnProperty(`isLogged`));     // false




const course = {
    coursename: "Js in Hindi",
    price: "999",
    courseInstructor: "Hitesh",
}
// course.courseInstructor 
// const {courseInstructor} = course
// console.log(courseInstructor);  // Hitesh

const {courseInstructor: instructor} = course
console.log(instructor);  // Hitesh

// {
//     "name": "Hitesh",
//     "coursename": "Js in Hindi",
//    " price": "free"
// }


[
    {},
    {},
    {}
]

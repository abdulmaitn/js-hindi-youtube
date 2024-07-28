// Dates

//let myDate = new Date()
// console.log(myDate);  // 2024-07-28T05:53:19.404Z
//console.log(myDate.toString());  // Sun Jul 28 2024 05:54:41 GMT+0000 (Coordinated Universal Time)
//console.log(myDate.toDateString());  //Sun Jul 28 2024
//console.log(myDate.toISOString());  // 2024-07-28T05:58:55.165Z
//console.log(myDate.toJSON());  // 2024-07-28T05:59:49.888Z
//console.log(myDate.toLocaleString());  // 7/28/2024, 6:00:48 AM
//console.log(typeof myDate);  // object


// let myCreatedDate = new Date(2023, 0, 23);
// console.log(myCreatedDate.toDateString());  // Mon Jan 23 2023

// let myCreatedDate = new Date (2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocalString());


// let myCreatedDate = new Date("2023-01-14");
// console.log(myCreatedDate.toLocaleString());  // 1/14/2023, 12:00:00 AM


// let myCreatedDate = new Date ("01-14-2023")

// let myTimeStamp = Date.now()

// console.log(myTimeStamp);  // 1722147821745
// console.log(myCreatedDate.getTime());  // 1673654400000
// console.log(Math.floor(Date.now()/1000));  // 1722148186







let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

// `${newDate.getDay()} and the time is `


console.log(toLocalString(`default`, {
    weekday: "long",
}))

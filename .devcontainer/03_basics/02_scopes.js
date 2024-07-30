// var c = 300              // Global Scope
let a = 300
if(true){                   // Block Scope /Inner scope
    let a = 10
    const b = 20
    // var c = 30    //  or c = 30
    console.log("INNER: ", a);  // INNER:  10

}




// console.log(a);  //console.log(a); => out of scope
// console.log(b);        //  b is not defined
// console.log(c);    // 30
   console.log(a);    // 300 (variable)
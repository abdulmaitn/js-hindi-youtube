// var c = 300              // Global Scope
//let a = 300
//if(true){                   // Block Scope /Inner scope
  //  let a = 10
   // const b = 20
    // var c = 30    //  or c = 30
   // console.log("INNER: ", a);  // INNER:  10

// }




// console.log(a);  //console.log(a); => out of scope
// console.log(b);        //  b is not defined
// console.log(c);    // 30
   //console.log(a);    // 300 (variable)
   

  function one (){
    const username = "Hitesh"

    function two(){
        const website = "Youtube"
        console.log(username);

    }
    //console.log(website);

    two()  // Hitesh
   }
  //  one()

  if(true){
    const username = "hitesh"
    if(username === "hitesh"){
      const website = "  youtube"
     //console.log(username + website);
    }
    // console.log(website)   // Error:: outsite scope
  }

  // console.log(username);  // Error: outside scope




// ++++++++++++++++++++++ interesting +++++++++++++++++++++++++++

console.log(addone (5))
function addone(num){
  return num + 1
}

addTwo(5)      // Error: Cannot access 'addTwo' before initialization
                  //because the value is stored in addTwo variable
const addTwo = function(num){
  return num + 2
}


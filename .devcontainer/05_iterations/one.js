// For 

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5){
        //console.log("5 is best number");
    }
    //console.log(element);
    
}
//console.log(element);  // Error Syntax

for (let i = 0; i <= 10; i++) {
    //console.log(`outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
      // console.log(`inner loop value: ${j} and inner loop ${i}`);
        //console.log(i + `*` + j + `=` + i*j);
    }
   
    let myArray = ["flash", "batman", "superman"]

    for (let index = 0; index < myArray.length; index++){
       // console.log(myArray.length);
        const element = myArray[index];
        // console.log(element);
    }
}


// breaks and continue;

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`Value of i is ${index}`);
    
// }


for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is ${index}`);
    
}